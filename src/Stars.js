import './Stars.css'
export default function Stars()
{
    let stars = [
        {
            Name : "Neutron star",
            Des : "A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich. Except for black holes, neutron stars are the smallest and densest currently known class of stellar objects. ",
            Img : "https://www.worldatlas.com/r/w1200-q80/upload/bd/04/60/shutterstock-1338908357.jpg"
        },
        {
            Name : "White dwarf",
            Des : "A white dwarf is a stellar core remnant composed mostly of electron-degenerate matter. A white dwarf is very dense: its mass is comparable to the Sun's, while its volume is comparable to the Earth's. ",
            Img : "https://cdn.mos.cms.futurecdn.net/DWKzCqjuCtirYCu8qH5ZU7.jpg"
        },
        {
            Name : "Red giant",
            Des : "A red giant is a luminous giant star of low or intermediate mass in a late phase of stellar evolution. The outer atmosphere is inflated and tenuous, making the radius large and the surface temperature around 5,000 K or lower. ",
            Img : "https://cdn.spacetelescope.org/archives/images/screen/potw1227a.jpg"
        },
        {
            Name : "Red dwarf",
            Des : "A red dwarf is the smallest and coolest kind of star on the main sequence. Red dwarfs are by far the most common type of star in the Milky Way, at least in the neighborhood of the Sun. However, as a result of their low luminosity, individual red dwarfs cannot be easily observed.  ",
            Img : "https://cdn.mos.cms.futurecdn.net/HgaCHZDNppE6e52yeDACo6.jpg"
        },
        {
            Name : "Supergiant",
            Des : "Supergiants are among the most massive and most luminous stars. Supergiant stars occupy the top region of the Hertzsprung–Russell diagram with absolute visual magnitudes between about −3 and −8. The temperature range of supergiant stars spans from about 3,400 K to over 20,000 K. ",
            Img : "https://cdn.britannica.com/07/186507-138-CCAD17CA/Overview-types-stars-red-dwarf-giant-supergiant.jpg?w=800&h=450&c=crop"
        },
        {
            Name : "Binary star",
            Des : "A binary star or binary star system is a system of two stars that are gravitationally bound to and in orbit around each other. Binary stars in the night sky that are seen as a single object to the naked eye are often resolved using a telescope as separate stars, in which case they are called visual binaries. ",
            Img : "https://cdn.mos.cms.futurecdn.net/7u5yfddeXVJP73NzbtNgnE.jpg"
        },
        {
            Name : "Giant star",
            Des : "A giant star is a star with substantially larger radius and luminosity than a main-sequence star of the same surface temperature. They lie above the main sequence on the Hertzsprung–Russell diagram and correspond to luminosity classes II and III. ",
            Img : "https://cdn.mos.cms.futurecdn.net/9A228sxQbc8M5SRT7SUJuL.jpg"
        },
        {
            Name : "Brown dwarf",
            Des : "Brown dwarfs are substellar objects that are not massive enough to sustain nuclear fusion of ordinary hydrogen into helium in their cores, unlike a main-sequence star. Instead, they have a mass between the most massive gas giant planets and the least massive stars, approximately 13 to 80 times that of Jupiter. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/e/e0/Artist%E2%80%99s_conception_of_a_brown_dwarf_like_2MASSJ22282889-431026.jpg"
        },
        {
            Name : "Protostar",
            Des : "A protostar is a very young star that is still gathering mass from its parent molecular cloud. The protostellar phase is the earliest one in the process of stellar evolution. For a low-mass star, it lasts about 500,000 years. ",
            Img : "https://scitechdaily.com/images/Webb-Fiery-Hourglass-as-New-Star-Forms-scaled.jpg"
        },
        {
            Name : "Yellow dwarf",
            Des : "A G-type main-sequence star, also often, and imprecisely called a yellow dwarf, or G star, is a main-sequence star of spectral type G. Such a star has about 0.9 to 1.1 solar masses and an effective temperature between about 5,300 and 6,000 K. ",
            Img : "https://media.sketchfab.com/models/f5f8860769c84c008ab1a285ea92c70b/thumbnails/f09ac2f32777469d8559325adbfba206/44cbf232e0354d9f8fcec9b0a53cecf5.jpeg"
        },
        {
            Name : "Variable star",
            Des : "A variable star is a star whose brightness as seen from Earth (its apparent magnitude) changes with time. This variation may be caused by a change in emitted light or by something partly blocking the light, so variable stars are classified as either: Intrinsic variables, or Extrinsic variables ",
            Img : "https://earthsky.org/upl/2021/04/VISTA_views_the_Trifid_Nebula_and_reveals_hidden_variable_stars.jpg"
        },
        {
            Name : "Red supergiant",
            Des : "Red supergiants are stars with a supergiant luminosity class of spectral type K or M. They are the largest stars in the universe in terms of volume, although they are not the most massive or luminous. ",
            Img : "https://physicsworld.com/wp-content/uploads/2022/11/Low-Res_unnamed.jpg"
        },
        {
            Name : "Pulsar",
            Des : "A pulsar is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles. This radiation can be observed only when a beam of emission is pointing toward Earth, and is responsible for the pulsed appearance of emission. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/a/a6/PIA18848-PSRB1509-58-ChandraXRay-WiseIR-20141023.jpg"
        },
        {
            Name : "Sirius",
            Des : "Sirius is the brightest star in the night sky. Its name is derived from the Greek word Σείριος, or Seirios, meaning lit. 'glowing' or 'scorching'. The star is designated α Canis Majoris, Latinized to Alpha Canis Majoris, and abbreviated α CMa or Alpha CMa. ",
            Img : "https://cdn.mos.cms.futurecdn.net/uxdsce4CMFwqPDRKEKvbX4.jpeg"
        },
        {
            Name : "Rigel",
            Des : "Rigel is a blue supergiant star in the constellation of Orion. It has the Bayer designation β Orionis, which is Latinized to Beta Orionis and abbreviated Beta Ori or β Ori. ",
            Img : "https://www.astronomytrek.com/wp-content/uploads/2016/02/rigel.jpg"
        },
        {
            Name : "Black dwarf",
            Des : "A black dwarf is a theoretical stellar remnant, specifically a white dwarf that has cooled sufficiently to no longer emit significant heat or light. ",
            Img : "https://assets.newatlas.com/dims4/default/46efced/2147483647/strip/true/crop/1536x1024+142+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fc4%2Fb1%2Fe8c31e74488699892bb46c0089c7%2Fbrown-dwarf3.jpg"
        },
        {
            Name : "Proxima Centauri",
            Des : "Proxima Centauri is a small, low-mass star located 4.2465 light-years away from the Sun in the southern constellation of Centaurus. Its Latin name means the 'nearest [star] of Centaurus'. It was discovered in 1915 by Robert Innes and is the nearest-known star to the Sun. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg"
        },
        {
            Name : "K-type main-sequence star",
            Des : "A K-type main-sequence star, also referred to as a K-type dwarf red dwarf, or orange dwarf, is a main-sequence star of spectral type K and luminosity class V. These stars are intermediate in size between red M-type main-sequence stars and yellow/white G-type main-sequence stars. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/4/48/61_Cygni_Proper_Motion.gif"
        },
        {
            Name : "A-type main-sequence star",
            Des : "An A-type main-sequence star or A dwarf star is a main-sequence star of spectral type A and luminosity class V. These stars have spectra defined by strong hydrogen Balmer absorption lines.. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sirius_A_and_B_artwork.jpg"
        },
        {
            Name : "Subgiant",
            Des : "A subgiant is a star that is brighter than a normal main-sequence star of the same spectral class, but not as bright as giant stars. The term subgiant is applied both to a particular spectral luminosity class and to a stage in the evolution of a star. ",
            Img : "https://i.stack.imgur.com/507OY.jpg"
        },
        {
            Name : "Eclipsing binary",
            Des : "An eclipsing binary is two close stars that appear to be a single star varying in brightness.  ",
            Img : "https://cdn.eso.org/images/screen/eso1311b.jpg"
        },
        {
            Name : "Subdwarf",
            Des : "A subdwarf, sometimes denoted by sd, is a star with luminosity class VI under the Yerkes spectral classification system. They are defined as stars with luminosity 1.5 to 2 magnitudes lower than that of main-sequence stars of the same spectral type.  ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/0/06/Artist%E2%80%99s_impression_of_star_plagued_by_giant_magnetic_spot.jpg"
        },
        {
            Name : "Arcturus",
            Des : "Arcturus is the brightest star in the northern constellation of Boötes. With an apparent visual magnitude of −0.05, it is the fourth-brightest star in the night sky, and the brightest in the northern celestial hemisphere. ",
            Img : "https://cdn.mos.cms.futurecdn.net/rDubZBD2ryyFooKzbeRu9G.jpg"
        },
        {
            Name : "Betelgeuse",
            Des : "Betelgeuse is a red supergiant star of spectral type M1-2 and one of the largest visible to the naked eye. It is usually the tenth-brightest star in the night sky and, after Rigel, the second-brightest in the constellation of Orion. ",
            Img : "https://cdn.mos.cms.futurecdn.net/6ZeJhkuqkud68ngfVZQEVe.jpg"
        }
    ]

    let Star = stars.map((str) => 
    {
        return (
            <>
            <div className="col-2 mainCol">
                <br />
                <br />
                <img src={str.Img} class="img-thumbnail img-fluid myImg" alt="..."/>
            </div>
            <div className="col-9 m-3 p-3 shadow">
                <h4 style={{color: "#36827f", textDecoration: "underline", fontFamily: "initial"}}>{str.Name}</h4>
                <br />
                <p class="card-text" style={{color: "white", textAlign: "justify", fontFamily: "serif"}}>{str.Des}</p>
            </div>
            </>
        )
    })

    return (
        <>
            <div className="container mt-3 border-top" >
                <div className="row m-3 ">
                    {Star}
                </div>
            </div>
        </>
    )
}