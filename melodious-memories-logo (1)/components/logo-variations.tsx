export const LogoVariations = {
  FULL: "full",
  SIMPLIFIED: "simplified",
  MONOCHROME: "monochrome",
} as const

export type LogoVariation = (typeof LogoVariations)[keyof typeof LogoVariations]

export type LogoProps = {
  variation?: LogoVariation
  className?: string
  size?: number
}

