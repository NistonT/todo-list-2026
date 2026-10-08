export const savedAuthForm = () => {
  try {
    const json = localStorage.getItem("auth");

    if (!json) return { login: "", password: "", remember: false };

    const data = JSON.parse(json);

    return { login: data.login, password: data.password, remember: data.remember };
  } catch {
    return { login: "", password: "", remember: false };
  }
};
