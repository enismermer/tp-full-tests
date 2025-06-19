export type CadranValue = 1 | 2;

export interface Cadrans {
  lune: CadranValue;
  soleil: CadranValue;
  terre: CadranValue;
}

export function calculateJupiterTime({ lune, soleil, terre }: Cadrans): string {
  let total = 0

  // Terre : pouvoir fort
  if (terre === 2) {
    return "nuight"
  }

  // Valeur de base de la terre
  let terreVal = 1;
  if (soleil === 2) {
    terreVal *= 2
  }

  if (soleil !== 1) {
    total += terreVal
  }

  // Valeurs brutes des cadrans
  total += lune
  total += soleil

  if (terre === 1 && soleil !== 1) {
    total += 2
  }

  if (lune === 1) {
    total -= 2
  } else if (lune === 2) {
    total = Math.floor(total / 2)
  }

  // On détermine enfin l'heure de Jupiter
  if (total <= 2) return "mortin"
  if (total <= 4) return "aprenoon"
  if (total <= 5) return "soirning"
  
  return "nuight"
}
