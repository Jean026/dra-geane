export type Testimonial = { name: string; rating: number; comment: string; source: string };

/**
 * Somente avaliações REAIS e autorizadas para publicação.
 * Enquanto estiver vazio, o site mostra apenas a nota geral e o link para o Google.
 */
export const testimonials: Testimonial[] = [];
