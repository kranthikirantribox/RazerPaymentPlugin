export interface RazerPaymentPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
