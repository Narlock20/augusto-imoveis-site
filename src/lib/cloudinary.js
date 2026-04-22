const CLOUD_NAME = "ds3b5xdat"; 

/**
 * Transforma uma imagem do Sanity em uma URL otimizada do Cloudinary via Fetch
 * com adição de marca d'água automática.
 */
export function getCloudinaryUrl(sanityImageUrl, width = 1200, height = 800) {
  if (!sanityImageUrl) return "";

  // Nome do arquivo da logo que você subiu no Cloudinary (ajuste se necessário)
  const logoName = "logo_marca_ghcyb9"; 

  /**
   * Parâmetros da Marca d'água:
   * l_${logoName}: define a camada da logo
   * o_30: opacidade em 30% (ajuste para ficar mais ou menos visível)
   * w_250: largura da marca d'água em pixels
   * g_south_east: posiciona no canto inferior direito
   * x_20,y_20: margem de distância das bordas
   */
  const watermark = `l_${logoName},o_20,w_400,g_center`;

  // Parâmetros de otimização + marca d'água
  // A marca d'água é inserida logo após as transformações de tamanho
  const params = `f_auto,q_auto,w_${width},h_${height},c_fill,g_auto/${watermark}`;
  
  // Retorna a URL final
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${params}/${encodeURIComponent(sanityImageUrl)}`;
}