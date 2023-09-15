import './Nebula.css'
export default function Nebula()
{
    let nebula = [
        {
            Name : "Planetary nebula",
            Des : "A planetary nebula is a type of emission nebula consisting of an expanding, glowing shell of ionized gas ejected from red giant stars late in their lives. The term planetary nebula is a misnomer because they are unrelated to planets. ",
            Img : "https://th-thumbnailer.cdn-si-edu.com/fcfBgtutHjW8nRfghG-Zzadc268=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/98/4c/984c3532-8acb-45dc-9b09-910a010153bd/catseye_w11.jpg"
        },
        {
            Name : "Orion Nebula",
            Des : "The Orion Nebula is a diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion, and is known as the middle star in the sword of Orion. It is one of the brightest nebulae and is visible to the naked eye in the night sky with apparent magnitude 4.0. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/800px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg"
        },
        {
            Name : "Helix Nebula",
            Des : "The Helix Nebula is a planetary nebula located in the constellation Aquarius. Discovered by Karl Ludwig Harding, most likely before 1824, this object is one of the closest of all the bright planetary nebulae to Earth. The distance, measured by the Gaia mission, is 655±13 light-years. ",
            Img : "https://www.nasa.gov/sites/default/files/images/693952main_pia15817-full_full.jpg"
        },
        {
            Name : "Emission nebula",
            Des : "An emission nebula is a nebula formed of ionized gases that emit light of various wavelengths. The most common source of ionization is high-energy ultraviolet photons emitted from a nearby hot star.  ",
            Img : "https://astrojolo.com/wp-content/uploads/2020/10/2020-09-20-N7380HORGB.jpg"
        },
        {
            Name : "Crab Nebula",
            Des : "The Crab Nebula is a supernova remnant and pulsar wind nebula in the constellation of Taurus. The common name comes from William Parsons, 3rd Earl of Rosse, who observed the object in 1842 using a 36-inch telescope and produced a drawing that looked somewhat like a crab. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/1200px-Crab_Nebula.jpg"
        },
        {
            Name : "Dark nebula",
            Des : "A dark nebula or absorption nebula is a type of interstellar cloud, particularly molecular clouds, that is so dense that it obscures the visible wavelengths of light from objects behind it, such as background stars and emission or reflection nebulae. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/All_Quiet_in_the_Nursery%3F.jpg/1200px-All_Quiet_in_the_Nursery%3F.jpg"
        },
        {
            Name : "Horsehead Nebula",
            Des : "The Horsehead Nebula is a small dark nebula in the constellation Orion. The nebula is located just to the south of Alnitak, the easternmost star of Orion's Belt, and is part of the much larger Orion molecular cloud complex. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/6/68/Barnard_33.jpg"
        },
        {
            Name : "Reflection nebula",
            Des : "In astronomy, reflection nebulae are clouds of interstellar dust which might reflect the light of a nearby star or stars. The energy from the nearby stars is insufficient to ionize the gas of the nebula to create an emission nebula, but is enough to give sufficient scattering to make the dust visible ",
            Img : "https://cdn.eso.org/images/publicationjpg/eso1105a.jpg"
        },
        {
            Name : "Eagle Nebula",
            Des : "The Eagle Nebula is a young open cluster of stars in the constellation Serpens, discovered by Jean-Philippe de Cheseaux in 1745–46. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eagle_Nebula_from_ESO.jpg/1200px-Eagle_Nebula_from_ESO.jpg"
        },
        {
            Name : "Carina Nebula",
            Des : "The Carina Nebula or Eta Carinae Nebula is a large, complex area of bright and dark nebulosity in the constellation Carina, located in the Carina–Sagittarius Arm of the Milky Way galaxy. The nebula is approximately 8,500 light-years from Earth. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/7/70/Carina_Nebula_by_Harel_Boren_%28151851961%2C_modified%29.jpg"
        },
        {
            Name : "Ring Nebula",
            Des : "The Ring Nebula is a planetary nebula in the northern constellation of Lyra. Such a nebula is formed when a star, during the last stages of its evolution before becoming a white dwarf, expels a vast luminous envelope of ionized gas into the surrounding interstellar space. ",
            Img : "https://www.nasa.gov/sites/default/files/thumbnails/image/ring-nebula-full_jpg.jpg"
        },
        {
            Name : "Dumbbell Nebula",
            Des : "The Dumbbell Nebula is a planetary nebula in the constellation Vulpecula, at a distance of about 1360 light-years. It was the first such nebula to be discovered, by Charles Messier in 1764. ",
            Img : "https://science.nasa.gov/files/science-red/s3fs-public/styles/image_gallery_scale_960w/public/atoms/M27_Mazlin_960.jpg?itok=yh2nJKr7"
        },
        {
            Name : "Lagoon Nebula",
            Des : "The Lagoon Nebula is a giant interstellar cloud in the constellation Sagittarius. It is classified as an emission nebula and as an H II region. The Lagoon Nebula was discovered by Giovanni Hodierna before 1654 and is one of only two star-forming nebulae faintly visible to the eye from mid-northern latitudes. ",
            Img : "https://cdn.britannica.com/55/2955-050-D16E68A0/Sagittarius-Lagoon-Nebula-light-nebula-stars-boundaries.jpg"
        },
        {
            Name : "Trifid Nebula",
            Des : "The Trifid Nebula is an H II region in the north-west of Sagittarius in a star-forming region in the Milky Way's Scutum-Centaurus Arm. It was discovered by Charles Messier on June 5, 1764. Its name means 'three-lobe'. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/f/fe/ESO-Trifid_Nebula.jpg"
        },
        {
            Name : "Rosette Nebula",
            Des : "The Rosette Nebula is an H II region located near one end of a giant molecular cloud in the Monoceros region of the Milky Way Galaxy. The open cluster NGC 2244 is closely associated with the nebulosity, the stars of the cluster having been formed from the nebula's matter. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/9/95/Rosette_Nebula_Narrowband_SHO_focal_length_384mm_Stephan_Hamel.jpg"
        },
        {
            Name : "Supernova remnant",
            Des : "A supernova remnant is the structure resulting from the explosion of a star in a supernova. The supernova remnant is bounded by an expanding shock wave, and consists of ejected material expanding from the explosion, and the interstellar material it sweeps up and shocks along the way. ",
            Img : "https://www.nasa.gov/sites/default/files/thumbnails/image/tycho.jpg"
        },
        {
            Name : "Cat's Eye Nebula",
            Des : "The Cat's Eye Nebula is a planetary nebula in the northern constellation of Draco, discovered by William Herschel on February 15, 1786. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/NGC6543.jpg/1200px-NGC6543.jpg"
        },
        {
            Name : "Crescent Nebula",
            Des : "The Crescent Nebula is an emission nebula in the constellation Cygnus, about 5000 light-years away from Earth. It was discovered by William Herschel in 1792. ",
            Img : "https://astrobackyard.com/wp-content/uploads/2021/10/crescent-nebula.jpg"
        },
        {
            Name : "Bubble Nebula",
            Des : "NGC 7635, also known as the Bubble Nebula, Sharpless 162, or Caldwell 11, is an H II region emission nebula in the constellation Cassiopeia. It lies close to the open cluster Messier 52. The bubble is created by the stellar wind from a massive hot, 8.7 magnitude young central star, SAO 20575. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/The_Bubble_Nebula_-_NGC_7635_-_Heic1608a.jpg/1200px-The_Bubble_Nebula_-_NGC_7635_-_Heic1608a.jpg"
        },
        {
            Name : "North America Nebula",
            Des : "The North America Nebula is an emission nebula in the constellation Cygnus, close to Deneb. It is named because its shape resembles North America. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/c/c0/NANeb3PS23_SCNR.jpg"
        },
        {
            Name : "Veil Nebula",
            Des : "The Veil Nebula is a cloud of heated and ionized gas and dust in the constellation Cygnus. It constitutes the visible portions of the Cygnus Loop, a supernova remnant, many portions of which have acquired their own individual names and catalogue identifiers. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/c/cb/Veil_Nebula_-_false-colour_narrowband_image.jpg"
        },
        {
            Name : "NGC 6302",
            Des : "NGC 6302 is a bipolar planetary nebula in the constellation Scorpius. The structure in the nebula is among the most complex ever observed in planetary nebulae.  ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/1/1c/NGC_6302_Hubble_2009.full.jpg"
        },
        {
            Name : "Tarantula Nebula",
            Des : "The Tarantula Nebula is a large H II region in the Large Magellanic Cloud, forming its south-east corner. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tarantula_Nebula_by_JWST.jpg/1200px-Tarantula_Nebula_by_JWST.jpg"
        },
        {
            Name : "Omega Nebula",
            Des : "The Omega Nebula, also known as the Swan Nebula, Checkmark Nebula, Lobster Nebula, and the Horseshoe Nebula is an H II region in the constellation Sagittarius. It was discovered by Philippe Loys de Chéseaux in 1745. Charles Messier catalogued it in 1764. ",
            Img : "https://www.nasa.gov/sites/default/files/thumbnails/image/heic0305a.jpg"
        }
    ]

    let Nebulas = nebula.map((neb) => 
    {
        return (
            <>
                {/* <div className="col-2">
                    <br />
                    <br />
                    <img src={neb.Img} className="img-fluid w-100 h-75"/>
                </div>
                <div className="col-9 m-3 p-3">
                    <h4 style={{color: "#92bcea", textDecoration: "underline"}}>{neb.Name}</h4>
                    <br />
                    <p class="card-text" style={{color: "white", textAlign: "justify"}}>{neb.Des}</p>
                </div> */}

                <div className="col-3 shadow">
                <div class="card m-1" style={{ backgroundColor : "#94b0da", height: "570px"}}>
                    <img src={neb.Img} class="card-img-top img-fluid" alt="..."  style={{height: "30vh"}}/>
                    <div class="card-body">
                        <h4 style={{color: "  #950714", textDecoration: "underline", fontFamily: "initial"}}>{neb.Name}</h4>
                    <p class="card-text" style={{color: "black", textAlign: "justify", fontFamily: "serif"}}>{neb.Des}</p>
                    </div>
                </div>
                </div>
            </>
        )
    })
    return (
        <>
            <div className="container mt-3 border-top">
                <div className="row m-3">
                    {Nebulas}
                </div>
            </div>
        </>
    )
}