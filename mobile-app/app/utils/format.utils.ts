export function formatCurrency(amount: number): string {
  return `EGP ${amount.toFixed(2)}`;
}

export function formatTransactionType(type: string): string {
  return type.split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}