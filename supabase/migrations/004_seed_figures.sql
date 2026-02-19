-- HistoGuesser Seed Data: Historical Figures
-- 30 diverse historical figures from different eras and regions

INSERT INTO figures (name, aliases, images, birth_year, death_year, active_year, hometown, lat, lon, description, tags) VALUES

-- Ancient Era
('Cleopatra VII', ARRAY['Cleopatra', 'Cleopatra the Seventh'], 
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/800px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg", "license": "Public Domain", "credit": "Altes Museum Berlin", "source_url": "https://commons.wikimedia.org/wiki/File:Kleopatra-VII.-Altes-Museum-Berlin1.jpg"}]'::jsonb,
 -69, -30, -50, 'Alexandria, Egypt', 31.2001, 29.9187,
 'The last active ruler of the Ptolemaic Kingdom of Egypt. Famous for her relationships with Julius Caesar and Mark Antony, she was a polyglot who could speak at least nine languages.',
 ARRAY['royalty', 'ancient', 'africa', 'female']),

('Julius Caesar', ARRAY['Caesar', 'Gaius Julius Caesar'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Gaius_Iulius_Caesar_%28Vatican_Museum%29.jpg/800px-Gaius_Iulius_Caesar_%28Vatican_Museum%29.jpg", "license": "Public Domain", "credit": "Vatican Museum", "source_url": "https://commons.wikimedia.org/wiki/File:Gaius_Iulius_Caesar_(Vatican_Museum).jpg"}]'::jsonb,
 -100, -44, -60, 'Rome, Italy', 41.9028, 12.4964,
 'Roman military general and statesman who played a critical role in the events that led to the demise of the Roman Republic. The month of July is named after him.',
 ARRAY['military', 'politics', 'ancient', 'europe']),

('Confucius', ARRAY['Kong Fuzi', 'Master Kong'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Konfuzius-1770.jpg/800px-Konfuzius-1770.jpg", "license": "Public Domain", "credit": "Anonymous", "source_url": "https://commons.wikimedia.org/wiki/File:Konfuzius-1770.jpg"}]'::jsonb,
 -551, -479, -500, 'Qufu, China', 35.5964, 116.9867,
 'Chinese philosopher whose teachings deeply influenced East Asian life and thought. His philosophy emphasized personal and governmental morality.',
 ARRAY['philosophy', 'ancient', 'asia']),

-- Medieval Era
('Genghis Khan', ARRAY['Temujin', 'Chinggis Khan'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/800px-YuanEmperorAlbumGenghisPortrait.jpg", "license": "Public Domain", "credit": "Unknown Artist", "source_url": "https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg"}]'::jsonb,
 1162, 1227, 1200, 'Khentii Mountains, Mongolia', 48.0000, 108.8800,
 'Founder of the Mongol Empire, which became the largest contiguous empire in history after his death. He united the Mongol tribes and conquered vast territories.',
 ARRAY['military', 'royalty', 'medieval', 'asia']),

('Joan of Arc', ARRAY['Jeanne d''Arc', 'The Maid of Orleans'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Joan_of_Arc_miniature_graded.jpg/800px-Joan_of_Arc_miniature_graded.jpg", "license": "Public Domain", "credit": "Centre Historique des Archives Nationales", "source_url": "https://commons.wikimedia.org/wiki/File:Joan_of_Arc_miniature_graded.jpg"}]'::jsonb,
 1412, 1431, 1429, 'Domrémy, France', 48.4436, 5.6758,
 'French heroine and Roman Catholic saint who led France to several important victories during the Hundred Years'' War. She was burned at the stake at age 19.',
 ARRAY['military', 'religion', 'medieval', 'europe', 'female']),

-- Renaissance Era
('Leonardo da Vinci', ARRAY['Leonardo', 'da Vinci'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Francesco_Melzi_-_Portrait_of_Leonardo.png/800px-Francesco_Melzi_-_Portrait_of_Leonardo.png", "license": "Public Domain", "credit": "Francesco Melzi", "source_url": "https://commons.wikimedia.org/wiki/File:Francesco_Melzi_-_Portrait_of_Leonardo.png"}]'::jsonb,
 1452, 1519, 1490, 'Vinci, Italy', 43.7814, 10.9236,
 'Italian polymath of the Renaissance whose areas of interest included invention, painting, sculpting, architecture, and science. Creator of the Mona Lisa and The Last Supper.',
 ARRAY['artist', 'inventor', 'renaissance', 'europe']),

('William Shakespeare', ARRAY['Shakespeare', 'The Bard'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/800px-Shakespeare.jpg", "license": "Public Domain", "credit": "John Taylor", "source_url": "https://commons.wikimedia.org/wiki/File:Shakespeare.jpg"}]'::jsonb,
 1564, 1616, 1600, 'Stratford-upon-Avon, England', 52.1917, -1.7081,
 'English playwright and poet, widely regarded as the greatest writer in the English language. Wrote 39 plays and 154 sonnets that are still performed worldwide.',
 ARRAY['writer', 'poet', 'renaissance', 'europe']),

('Galileo Galilei', ARRAY['Galileo'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/800px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg", "license": "Public Domain", "credit": "Justus Sustermans", "source_url": "https://commons.wikimedia.org/wiki/File:Justus_Sustermans_-_Portrait_of_Galileo_Galilei,_1636.jpg"}]'::jsonb,
 1564, 1642, 1610, 'Pisa, Italy', 43.7228, 10.4017,
 'Italian astronomer, physicist and engineer. Called the "father of modern science", he championed heliocentrism and improved the telescope.',
 ARRAY['scientist', 'astronomer', 'renaissance', 'europe']),

-- Enlightenment & Early Modern
('Isaac Newton', ARRAY['Newton', 'Sir Isaac Newton'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/800px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg", "license": "Public Domain", "credit": "Godfrey Kneller", "source_url": "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689.jpg"}]'::jsonb,
 1643, 1727, 1687, 'Woolsthorpe, England', 52.8092, -0.6388,
 'English mathematician, physicist, and astronomer who formulated the laws of motion and universal gravitation. His work Principia laid the foundations of classical mechanics.',
 ARRAY['scientist', 'physicist', 'mathematician', 'early_modern', 'europe']),

('Wolfgang Amadeus Mozart', ARRAY['Mozart', 'Amadeus'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/800px-Wolfgang-amadeus-mozart_1.jpg", "license": "Public Domain", "credit": "Barbara Krafft", "source_url": "https://commons.wikimedia.org/wiki/File:Wolfgang-amadeus-mozart_1.jpg"}]'::jsonb,
 1756, 1791, 1780, 'Salzburg, Austria', 47.8095, 13.0550,
 'Prolific and influential composer of the Classical period. Composed over 600 works, many acknowledged as pinnacles of symphonic, concertante, chamber, and operatic music.',
 ARRAY['composer', 'musician', 'early_modern', 'europe']),

('George Washington', ARRAY['Washington', 'Father of His Country'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/800px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg", "license": "Public Domain", "credit": "Gilbert Stuart", "source_url": "https://commons.wikimedia.org/wiki/File:Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"}]'::jsonb,
 1732, 1799, 1776, 'Westmoreland County, Virginia', 38.1527, -76.7744,
 'First President of the United States and Founding Father. Commander-in-Chief of the Continental Army during the Revolutionary War. The capital city is named after him.',
 ARRAY['politics', 'military', 'early_modern', 'america']),

('Napoleon Bonaparte', ARRAY['Napoleon', 'Napoleon I'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg", "license": "Public Domain", "credit": "Jacques-Louis David", "source_url": "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg"}]'::jsonb,
 1769, 1821, 1804, 'Ajaccio, Corsica', 41.9268, 8.7369,
 'French military and political leader who rose to prominence during the French Revolution. He crowned himself Emperor and dominated European affairs for nearly two decades.',
 ARRAY['military', 'politics', 'royalty', 'early_modern', 'europe']),

-- 19th Century
('Abraham Lincoln', ARRAY['Lincoln', 'Honest Abe'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/800px-Abraham_Lincoln_O-77_matte_collodion_print.jpg", "license": "Public Domain", "credit": "Alexander Gardner", "source_url": "https://commons.wikimedia.org/wiki/File:Abraham_Lincoln_O-77_matte_collodion_print.jpg"}]'::jsonb,
 1809, 1865, 1861, 'Hodgenville, Kentucky', 37.5742, -85.7399,
 '16th President of the United States who led the nation through the Civil War and abolished slavery. Famous for the Gettysburg Address and tall hat.',
 ARRAY['politics', 'modern', 'america']),

('Charles Darwin', ARRAY['Darwin'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/800px-Charles_Darwin_seated_crop.jpg", "license": "Public Domain", "credit": "Julia Margaret Cameron", "source_url": "https://commons.wikimedia.org/wiki/File:Charles_Darwin_seated_crop.jpg"}]'::jsonb,
 1809, 1882, 1859, 'Shrewsbury, England', 52.7081, -2.7535,
 'English naturalist and biologist who established that all species descended from common ancestors. His theory of evolution by natural selection revolutionized biology.',
 ARRAY['scientist', 'biologist', 'modern', 'europe']),

('Vincent van Gogh', ARRAY['Van Gogh', 'Vincent'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg", "license": "Public Domain", "credit": "Vincent van Gogh", "source_url": "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg"}]'::jsonb,
 1853, 1890, 1888, 'Zundert, Netherlands', 51.4714, 4.6589,
 'Dutch Post-Impressionist painter whose work had far-reaching influence on 20th century art. Created over 2,000 artworks including The Starry Night, despite his troubled life.',
 ARRAY['artist', 'painter', 'modern', 'europe']),

('Marie Curie', ARRAY['Curie', 'Maria Sklodowska-Curie'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/800px-Marie_Curie_c1920.jpg", "license": "Public Domain", "credit": "Unknown", "source_url": "https://commons.wikimedia.org/wiki/File:Marie_Curie_c1920.jpg"}]'::jsonb,
 1867, 1934, 1903, 'Warsaw, Poland', 52.2297, 21.0122,
 'Polish physicist and chemist who conducted pioneering research on radioactivity. First woman to win a Nobel Prize and only person to win Nobel Prizes in two different sciences.',
 ARRAY['scientist', 'physicist', 'chemist', 'modern', 'europe', 'female', 'nobel_laureate']),

-- 20th Century
('Albert Einstein', ARRAY['Einstein'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg", "license": "Public Domain", "credit": "Oren J. Turner", "source_url": "https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head.jpg"}]'::jsonb,
 1879, 1955, 1915, 'Ulm, Germany', 48.4011, 9.9876,
 'German-born theoretical physicist who developed the theory of relativity. His E=mc² equation is one of the most famous formulas in physics. Nobel Prize winner in 1921.',
 ARRAY['scientist', 'physicist', 'modern', 'europe', 'nobel_laureate']),

('Mahatma Gandhi', ARRAY['Gandhi', 'Mohandas Karamchand Gandhi'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/800px-Mahatma-Gandhi%2C_studio%2C_1931.jpg", "license": "Public Domain", "credit": "Unknown", "source_url": "https://commons.wikimedia.org/wiki/File:Mahatma-Gandhi,_studio,_1931.jpg"}]'::jsonb,
 1869, 1948, 1920, 'Porbandar, India', 21.6417, 69.6293,
 'Indian lawyer and anti-colonial nationalist who employed nonviolent resistance to lead the successful campaign for India''s independence from British rule.',
 ARRAY['activist', 'politics', 'modern', 'asia']),

('Pablo Picasso', ARRAY['Picasso'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Portrait_de_Picasso%2C_1908.jpg/800px-Portrait_de_Picasso%2C_1908.jpg", "license": "Public Domain", "credit": "Unknown", "source_url": "https://commons.wikimedia.org/wiki/File:Portrait_de_Picasso,_1908.jpg"}]'::jsonb,
 1881, 1973, 1937, 'Málaga, Spain', 36.7213, -4.4214,
 'Spanish painter, sculptor, and co-founder of Cubism. One of the most influential artists of the 20th century, he created over 50,000 artworks including Guernica.',
 ARRAY['artist', 'painter', 'sculptor', 'modern', 'europe']),

('Winston Churchill', ARRAY['Churchill', 'Sir Winston Churchill'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg", "license": "Public Domain", "credit": "Library of Congress", "source_url": "https://commons.wikimedia.org/wiki/File:Sir_Winston_Churchill_-_19086236948.jpg"}]'::jsonb,
 1874, 1965, 1940, 'Blenheim Palace, England', 51.8414, -1.3608,
 'British statesman who served as Prime Minister during World War II. Known for his stirring speeches and leadership, he was also awarded the Nobel Prize in Literature.',
 ARRAY['politics', 'military', 'writer', 'modern', 'europe', 'nobel_laureate']),

('Frida Kahlo', ARRAY['Kahlo', 'Frida'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/800px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg", "license": "Public Domain", "credit": "Guillermo Kahlo", "source_url": "https://commons.wikimedia.org/wiki/File:Frida_Kahlo,_by_Guillermo_Kahlo.jpg"}]'::jsonb,
 1907, 1954, 1939, 'Coyoacán, Mexico City', 19.3467, -99.1619,
 'Mexican painter known for her portraits, self-portraits, and works inspired by Mexican culture. Her paintings often depicted her physical and emotional pain.',
 ARRAY['artist', 'painter', 'modern', 'america', 'female']),

('Alan Turing', ARRAY['Turing'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/800px-Alan_Turing_Aged_16.jpg", "license": "Public Domain", "credit": "Unknown", "source_url": "https://commons.wikimedia.org/wiki/File:Alan_Turing_Aged_16.jpg"}]'::jsonb,
 1912, 1954, 1942, 'London, England', 51.5074, -0.1278,
 'English mathematician, computer scientist, and cryptanalyst. Father of theoretical computer science and artificial intelligence. His work breaking the Enigma code helped win WWII.',
 ARRAY['scientist', 'mathematician', 'computer_scientist', 'modern', 'europe']),

('Rosa Parks', ARRAY['Parks'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/800px-Rosaparks.jpg", "license": "Public Domain", "credit": "Unknown", "source_url": "https://commons.wikimedia.org/wiki/File:Rosaparks.jpg"}]'::jsonb,
 1913, 2005, 1955, 'Tuskegee, Alabama', 32.4296, -85.7079,
 'American activist in the civil rights movement best known for her pivotal role in the Montgomery bus boycott. Her refusal to give up her seat sparked a year-long boycott.',
 ARRAY['activist', 'modern', 'america', 'female']),

('Nelson Mandela', ARRAY['Mandela', 'Madiba'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/800px-Nelson_Mandela_1994.jpg", "license": "Public Domain", "credit": "South Africa The Good News", "source_url": "https://commons.wikimedia.org/wiki/File:Nelson_Mandela_1994.jpg"}]'::jsonb,
 1918, 2013, 1994, 'Mvezo, South Africa', -31.7833, 28.7167,
 'South African anti-apartheid revolutionary and political leader who served as President. Imprisoned for 27 years, he became a global advocate for human rights. Nobel Peace Prize winner.',
 ARRAY['politics', 'activist', 'modern', 'africa', 'nobel_laureate']),

('Muhammad Ali', ARRAY['Ali', 'Cassius Clay'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/800px-Muhammad_Ali_NYWTS.jpg", "license": "Public Domain", "credit": "Ira Rosenberg", "source_url": "https://commons.wikimedia.org/wiki/File:Muhammad_Ali_NYWTS.jpg"}]'::jsonb,
 1942, 2016, 1964, 'Louisville, Kentucky', 38.2527, -85.7585,
 'American professional boxer and activist. Widely regarded as one of the greatest heavyweight boxers of all time. Famous for his quick wit and social activism.',
 ARRAY['sports', 'activist', 'modern', 'america']),

('Stephen Hawking', ARRAY['Hawking'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/800px-Stephen_Hawking.StarChild.jpg", "license": "Public Domain", "credit": "NASA", "source_url": "https://commons.wikimedia.org/wiki/File:Stephen_Hawking.StarChild.jpg"}]'::jsonb,
 1942, 2018, 1974, 'Oxford, England', 51.7520, -1.2577,
 'English theoretical physicist who made groundbreaking discoveries about black holes and cosmology despite living with ALS. Wrote "A Brief History of Time".',
 ARRAY['scientist', 'physicist', 'modern', 'europe']),

('Malala Yousafzai', ARRAY['Malala'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Malala_Yousafzai_2015.jpg/800px-Malala_Yousafzai_2015.jpg", "license": "CC BY 2.0", "credit": "Russell Watkins/DFID", "source_url": "https://commons.wikimedia.org/wiki/File:Malala_Yousafzai_2015.jpg"}]'::jsonb,
 1997, NULL, 2014, 'Mingora, Pakistan', 34.7797, 72.3603,
 'Pakistani activist for female education and the youngest Nobel Prize laureate. Survived an assassination attempt by the Taliban at age 15 and continued her advocacy globally.',
 ARRAY['activist', 'modern', 'asia', 'female', 'nobel_laureate']),

-- Additional Diverse Figures
('Queen Elizabeth I', ARRAY['Elizabeth I', 'The Virgin Queen'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Darnley_stage_3.jpg/800px-Darnley_stage_3.jpg", "license": "Public Domain", "credit": "Unknown", "source_url": "https://commons.wikimedia.org/wiki/File:Darnley_stage_3.jpg"}]'::jsonb,
 1533, 1603, 1580, 'Greenwich, England', 51.4826, 0.0077,
 'Queen of England and Ireland who presided over a golden age of English history. Her 45-year reign saw the defeat of the Spanish Armada and a flourishing of English drama.',
 ARRAY['royalty', 'politics', 'early_modern', 'europe', 'female']),

('Sigmund Freud', ARRAY['Freud'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/800px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg", "license": "Public Domain", "credit": "Max Halberstadt", "source_url": "https://commons.wikimedia.org/wiki/File:Sigmund_Freud,_by_Max_Halberstadt_(cropped).jpg"}]'::jsonb,
 1856, 1939, 1900, 'Freiberg, Austria', 49.9187, 18.1519,
 'Austrian neurologist and founder of psychoanalysis. Developed therapeutic techniques such as free association and dream interpretation. His theories revolutionized psychology.',
 ARRAY['scientist', 'psychologist', 'modern', 'europe']),

('Martin Luther King Jr.', ARRAY['MLK', 'King', 'Dr. King'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/800px-Martin_Luther_King%2C_Jr..jpg", "license": "Public Domain", "credit": "Nobel Foundation", "source_url": "https://commons.wikimedia.org/wiki/File:Martin_Luther_King,_Jr..jpg"}]'::jsonb,
 1929, 1968, 1963, 'Atlanta, Georgia', 33.7490, -84.3880,
 'American Baptist minister and activist who led the civil rights movement. Best known for his "I Have a Dream" speech and nonviolent resistance. Nobel Peace Prize winner.',
 ARRAY['activist', 'religion', 'modern', 'america', 'nobel_laureate']),

('Nikola Tesla', ARRAY['Tesla'],
 '[{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG", "license": "Public Domain", "credit": "Napoleon Sarony", "source_url": "https://commons.wikimedia.org/wiki/File:N.Tesla.JPG"}]'::jsonb,
 1856, 1943, 1893, 'Smiljan, Croatia', 44.5511, 15.3164,
 'Serbian-American inventor and electrical engineer who pioneered the alternating current (AC) electricity system. Made groundbreaking contributions to electromagnetism.',
 ARRAY['inventor', 'scientist', 'engineer', 'modern', 'europe']);

-- Add comment
COMMENT ON TABLE figures IS 'Seeded with 30 diverse historical figures from various eras and regions';

