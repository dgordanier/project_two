const { info } = require("console")

const informations = [
    {
        name: 'Surgical Masks',
        AKA: 'medical face masks',
        image: 'https://i.imgur.com/NnF9t3x.jpg',
        origin: 'Europe',
        info: 'Face masks for use in surgery were developed in Europe by several physicians, including Jan Mikulicz-Radecki at the University of Breslau and Paul Berger in Paris, in the late nineteenth century, as a result of increasing awareness of germ theory and the importance of antiseptic procedures in medicine. In response to a pneumonic plague in Manchuria and Mongolia in 1910, Chinese-Malaysian epidemiologist Dr. Wu Lien-teh greatly improved on the designs he had seen in Europe to develop a face mask of layers of gauze and cotton that would protect both the wearer and others. Modern surgical masks began to be used in the 1960s. Their adoption caused cloth facemasks, which had been used since the late 19th century, to completely fall out of use in the developed world. However, cloth masks and surgical masks both continued to be used in countries',
    },
    {
        name: 'Medical Gloves',
        AKA: 'Latex and nitrile gloves',
        image: 'https://i.imgur.com/qp4gIvC.jpg',
        origin: 'United States',
        info: 'William Stewart Halsted, The Johns Hopkins Hospitals first surgeon in chief, is widely credited as the first to develop and introduce rubber surgical gloves in the United States. That was in 1894, five years after the institution opened.Now, in an effort to make medical care safer for patients and health care workers, The Johns Hopkins Hospital has become the first major medical institution to become “latex safe” by ending all use of latex gloves and almost all medical latex products.',
    },
    {
        name: 'N95 Respirator',
        AKA: 'KN95',
        image: 'https://i.imgur.com/EiKLrcX.jpg',
        origin: 'United States',
        info: 'An N95 filtering facepiece respirator, commonly abbreviated N95 respirator is a particulate-filtering facepiece respirator that meets the U.S. National Institute for Occupational Safety and Health (NIOSH) N95 classification of air filtration, meaning that it filters at least 95% of airborne particles. This standard does not require that the respirator be resistant to oil; another standard, P95, adds that requirement. The N95 type is the most common particulate-filtering facepiece respirator. It is an example of a mechanical filter respirator, which provides protection against particulates but not against gases or vapors. An authentic N95 respirator is marked with the text "NIOSH" or the NIOSH logo, the filter class ("N95"), a "TC" approval number of the form XXX-XXXX, the approval number must be listed on the NIOSH Certified Equipment List (CEL) or the NIOSH Trusted-Source page, and it must have headbands instead of ear loops.'
    },
    {
        name: 'Hazardous Material Suit',
        AKA: 'Hazmat suit',
        image: 'https://i.imgur.com/5JuLs68.jpg',
        origin: 'unknown',
        info: 'A hazmat suit (hazardous materials suit) is a piece of personal protective equipment that consists of an impermeable whole-body garment worn as protection against hazardous materials. Such suits are often combined with self-contained breathing apparatus (SCBA) to ensure a supply of breathable air. Hazmat suits are used by firefighters, emergency medical technicians, paramedics, researchers, personnel responding to toxic spills, specialists cleaning up contaminated facilities, and workers in toxic environments.',
    },
    {
        name: 'Oxygen Cylinder',
        AKA: 'Oxygen',
        
        origin: 'England',
        info: "An oxygen tank is an oxygen storage vessel, which is either held under pressure in gas cylinders, or as liquid oxygen in a cryogenic storage tank.",
    },
    {
        name: 'Lab Coats',
        AKA: 'Medical gown',
        // image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/11315809/large.jpg',
        origin: 'unknown',
        info: 'Lab coat, is a knee-length overcoat or smock worn by professionals in the medical field or by those involved in laboratory work. The coat protects their street clothes and also serves as a simple uniform. The garment is made from white or light-colored cotton, linen, or cotton polyester blend, allowing it to be washed at high temperature and making it easy to see if it is clean.',
    },
    
]

module.exports = {
    informations,
}