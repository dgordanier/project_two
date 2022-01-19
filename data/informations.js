const informations = [
    {
        name: 'Surgical Masks',
        AKA: 'medical face masks',
        // image: 'https://top10animal.com/wp-content/uploads/2021/06/Ebh1LYEWkAIY2Yt.jpg',
        origin : 'Europe',
        info: 'Face masks for use in surgery were developed in Europe by several physicians, including Jan Mikulicz-Radecki at the University of Breslau and Paul Berger in Paris, in the late nineteenth century, as a result of increasing awareness of germ theory and the importance of antiseptic procedures in medicine.[40] In response to a pneumonic plague in Manchuria and Mongolia in 1910, Chinese-Malaysian epidemiologist Dr. Wu Lien-teh greatly improved on the designs he had seen in Europe to develop a face mask of layers of gauze and cotton that would protect both the wearer and others. Modern surgical masks began to be used in the 1960s. Their adoption caused cloth facemasks, which had been used since the late 19th century, to completely fall out of use in the developed world.[41][42] However, cloth masks and surgical masks both continued to be used in countries',
    },
    {
        name: 'Medical Gloves',
        AKA: 'Latex and nitrile gloves',
        // image: 'https://a-z-animals.com/media/2019/11/Giant-African-land-snail-on-hand.jpg',
        origin: 'United States',
        info: 'William Stewart Halsted, The Johns Hopkins Hospitals first surgeon in chief, is widely credited as the first to develop and introduce rubber surgical gloves in the United States. That was in 1894, five years after the institution opened.Now, in an effort to make medical care safer for patients and health care workers, The Johns Hopkins Hospital has become the first major medical institution to become “latex safe” by ending all use of latex gloves and almost all medical latex products.',
    },
    {
        name: 'N95 respirator',
        AKA: 'KN95',
        // image: 'https://www.aquariadise.com/wp-content/uploads/2020/03/rabbit-snail.jpg',
        origin: 'United States'
        info: 'An N95 filtering facepiece respirator, commonly abbreviated N95 respirator,[1] is a particulate-filtering facepiece respirator that meets the U.S. National Institute for Occupational Safety and Health (NIOSH) N95 classification of air filtration, meaning that it filters at least 95% of airborne particles. This standard does not require that the respirator be resistant to oil; another standard, P95, adds that requirement. The N95 type is the most common particulate-filtering facepiece respirator.[2] It is an example of a mechanical filter respirator, which provides protection against particulates but not against gases or vapors.[3] An authentic N95 respirator is marked with the text "NIOSH" or the NIOSH logo, the filter class ("N95"), a "TC" approval number of the form XXX-XXXX, the approval number must be listed on the NIOSH Certified Equipment List (CEL)[4] or the NIOSH Trusted-Source page,[5] and it must have headbands instead of ear loops.',
    },
    {
        name: 'Hazardous material suit',
        AKA: 'Hazmat suit',
        // image: 'https://featuredcreature.com/wp-content/uploads/2014/02/megalobulimus-capillaceus.gif',
        origin: 'unknown',
        info: 'A hazmat suit (hazardous materials suit) is a piece of personal protective equipment that consists of an impermeable whole-body garment worn as protection against hazardous materials. Such suits are often combined with self-contained breathing apparatus (SCBA) to ensure a supply of breathable air. Hazmat suits are used by firefighters, emergency medical technicians, paramedics, researchers, personnel responding to toxic spills, specialists cleaning up contaminated facilities, and workers in toxic environments.',
    },
    {
        name: 'Oxygen Cylinder',
        AKA: 'Oxygen',
        //image: 'https://media.istockphoto.com/photos/textile-cone-shell-picture-id157582260?k=20&m=157582260&s=612x612&w=0&h=7MN1yTBoW0vNO20WNEK9ksNJ7KTceGObuZKw_ZVtWRU=',
        habitat: 'Red Sea, Indian Ocean, Indo-Pacific Reefs',
        info: " Its shell has a distinctive mottled appearance and is highly coveted among collectors, but what really sets it apart from other snails? It's the most venomous snail — and, in fact, one of the most venomous creatures — in the world. It fires a complex concoction of toxins via a harpoonlike tooth propelled from an extendable proboscis at speeds of up to 400 mph.",
    },
    {
        name: 'Violet Sea Snails',
        scientificName: 'Janthina janthina',
        image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/11315809/large.jpg',
        shellLength: '3.5 cms (1.4 inches)',
        habitat: 'Worldwide',
        info: 'The beautiful purple shell of the violet sea snail (Janthina janthina) is only part of what makes this gastropod so interesting. Otherwise known as the bubble-raft snail, the critter collects bubbles in its mucus, then uses its bubbly concoction as a raft for long-distance ocean travel. Floating is their only means of transportation as they cannot swim. They can be found in warm tropical and temperate waters worldwide but high concentrations of them occur in the subtropical Atlantic, Indian, and Pacific oceans.',
    },
    {
        name: 'Minute Land Snail',
        scientificName: 'Opisthostoma vermiculum',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Plectostoma_obliquedentatum.jpg/1200px-Plectostoma_obliquedentatum.jpg',
        shellLength: '1.5 mm (0.059 in)',
        habitat: 'Malaysia',
        info: 'These snails are found only on limestone karsts. There is significant quarring activities in the area, and this makes the species particularly vulnerable to extinction. This is the first snail reported that has a shell which shows four discernible coiling axes. The body whorls of the shell thrice detach and twice reattach to preceding whorls without any support. The detached whorls coil around three secondary axes in addition to their primary teleoconch axis. All specimens showed these features in a homogeneous way.',
    },
    {
        name: 'Croatian Cave Snails',
        scientificName: 'Zospeum tholussum',
        image: 'https://www.sciencenews.org/wp-content/uploads/2013/11/notebook_introducing_primary.jpg',
        shellLength: '2 mm (0.08 in)',
        habitat: 'Croatia',
        info: 'This ghostly Croatian cave snail (Zospeum tholussum) was discovered deep in the Lukina Jama–Trojama cave system — the deepest cave in Croatia and 14th deepest in the world — in 2013. Apart from being so recently described, it is also particularly noteworthy for being almost entirely transparent — even its shell. Because the see-through gastropods spend their entire lives in extreme darkness, they have no sense of sight. The second whorl of their shells has a characteristic dome-like shape. They are also extremely slow-moving and may depend on passive transportation through running water or larger animals for dispersal.',
    },
    {
        name: "Hairy Triton's Trumpets",
        scientificName: 'Cymatium pileare',
        image: 'http://www.mollusca.co.nz/images_shells/3200/3118_Monoplex_parthenopeus_3.jpg',
        shellLength: ' 38–140 mm (1.5–5.5 in)',
        habitat: 'Worldwide',
        info: "This tropical benthic sea snails can be found at a depth range of 0 – 50 m. They mainly live on hard and coarse detritic bottoms, in coral reef areas. This species is widespread in the Atlantic, in the Red Sea and in the Indo-Western Pacific from East and South Africa, to eastern Polynesia, north to southern Japan and Hawaii and south to southern Queensland. Though it does have a rather voracious appetite, it's herbivorous and doesn't prey on other animals. Hairy triton's trumpets live in shallow water around coral.",
    },
]

module.exports = {
    snails,
}