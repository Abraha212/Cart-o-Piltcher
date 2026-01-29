import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cartão Saúde Piltcher | Acesso Facilitado à Saúde de Qualidade',
  description: 'O Cartão Piltcher existe para que você não precise mais adiar seus cuidados. Garantimos acesso do pré-natal ao controle de diabetes com valores acessíveis.',
  keywords: ['cartão saúde', 'piltcher', 'pelotas', 'saúde acessível', 'consultas médicas'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
