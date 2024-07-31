import axios from 'axios';
import cheerio from 'cheerio';

export const scrapeImages = async (req, res) => {
  const { anime, chapter } = req.query;
  const url = `https://mangaonline.biz/capitulo/${anime}-capitulo-${chapter}/`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const images = [];
    $('.content p img').each((index, img) => {
      const src = $(img).attr('src');
      if (src) {
        images.push(src);
      }
    });

    res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ message: 'Error while scraping images' });
  }
};
