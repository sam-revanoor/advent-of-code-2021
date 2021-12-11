export const validPasswords = (passwords: Record<string, string>[]): number => {
  const pws = passwords.map((pw) => {
    return {
      passwordPolicy: Object.keys(pw)[0].split(" "),
      password: Object.values(pw)[0],
    };
  });

  let params = [];
  let validPws: string[] = [];

  pws.forEach((pw) => {
    const policyValue = pw.passwordPolicy[1];
    params = pw.passwordPolicy[0].split("-");
    if (
      (pw.password.split("")[parseInt(params[0]) - 1] === policyValue &&
        !(pw.password.split("")[parseInt(params[1]) - 1] === policyValue)) ||
      (!(pw.password.split("")[parseInt(params[0]) - 1] === policyValue) &&
        pw.password.split("")[parseInt(params[1]) - 1] === policyValue)
    ) {
      validPws.push(pw.password);
    }
  });

  return validPws.length;
};
