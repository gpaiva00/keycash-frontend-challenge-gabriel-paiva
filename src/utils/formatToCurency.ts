export const formatToCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatter.format(value)
}

export const formatToReal = (value: number) => {
  let formattedValue = value + ''

  formattedValue = formattedValue.replace(/([0-9]{2})$/g, ',$1')

  if (formattedValue.length > 6)
    formattedValue = formattedValue.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

  return formattedValue
}
