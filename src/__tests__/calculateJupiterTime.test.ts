import { describe, it, expect } from 'vitest';
import { calculateJupiterTime } from '../modules/calculateJupiterTime';

describe('calculateJupiterTime', () => {
  it('devrait retourner "nuight" si terre vaut 2 (prioritaire)', () => {
    expect(calculateJupiterTime({ lune: 1, soleil: 1, terre: 2 })).toBe("nuight");
    expect(calculateJupiterTime({ lune: 2, soleil: 2, terre: 2 })).toBe("nuight");
  });

  it('mortin: total <= 2', () => {
    expect(calculateJupiterTime({ lune: 1, soleil: 1, terre: 1 })).toBe("mortin");
    expect(calculateJupiterTime({ lune: 2, soleil: 2, terre: 1 })).toBe("mortin");
    expect(calculateJupiterTime({ lune: 1, soleil: 2, terre: 1 })).toBe("aprenoon");
  })

  it('aprenoon: total <= 4', () => {
    expect(calculateJupiterTime({ lune: 2, soleil: 1, terre: 1 })).toBe("aprenoon");
  })

  it('soirning: total == 5', () => {
    expect(calculateJupiterTime({ lune: 1, soleil: 2, terre: 1 })).toBe("soirning");
  })

  it('nuight: total > 5 (sans terre=2)', () => {
    expect(calculateJupiterTime({ lune: 2, soleil: 2, terre: 1 })).toBe("nuight");
  })
});
