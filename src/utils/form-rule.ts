export const ValidatorUername = (rule: any, value: any, callback: any) => {
  if (/^[0-9a-zA-z]{5,10}$/.test(value)) {
    callback()
  } else {
    callback(new Error(' 账号长度至少5位'))
  }
}

export const ValidatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少6位'))
  }
}
