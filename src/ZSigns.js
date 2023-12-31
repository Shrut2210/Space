

export default function ZSigns()
{
    let sign = [
        {
            Name : "Aries (March 21 - April 19)",
            Des : "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Aries_symbol_%28bold%29.svg/1200px-Aries_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Taurus (April 20 - May 20)",
            Des : "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors. ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Taurus_symbol_%28bold%29.svg/800px-Taurus_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Gemini (May 21 - June 20)",
            Des : "Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!  ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gemini_symbol_%28bold%29.svg/800px-Gemini_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Cancer (June 21 - July 22)",
            Des : "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cancer_symbol_%28bold%29.svg/1200px-Cancer_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Leo (July 23 - August 22)",
            Des : "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Leo_symbol_%28bold%29.svg/1200px-Leo_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Virgo (August 23 - September 22)",
            Des : "You know the expression, if you want something done, give it to a busy person? Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Virgo_symbol_%28bold%29.svg/1200px-Virgo_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Libra (September 23 - October 22)",
            Des : "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Libra_symbol_%28bold%29.svg/1200px-Libra_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Scorpio (October 23 - November 21)",
            Des : "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Scorpius_symbol_%28bold%29.svg/800px-Scorpius_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Sagittarius (November 22 - December 21)",
            Des : "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sagittarius_symbol_%28bold%29.svg/1200px-Sagittarius_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Capricorn (December 22 - January 19)",
            Des : "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Capricornus_symbol_%28bold%29.svg/1200px-Capricornus_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Aquarius (January 20 - February 18)",
            Des : "Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Aquarius_symbol_%28bold%29.svg/1200px-Aquarius_symbol_%28bold%29.svg.png"
        },
        {
            Name : "Pisces (February 19 - March 20)",
            Des : "If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson the joys and the pain, the hopes and the fears learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.! ",
            Img : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pisces_symbol_%28bold%29.svg/1200px-Pisces_symbol_%28bold%29.svg.png"
        }
    ]

    let Signs = sign.map((si) => 
    {
        return (
            <>
            <div className="col-10 m-3 p-3 border-bottom">
                <h4 style={{color: "#d9c5b2", textDecoration: "underline", fontFamily: "initial"}}>{si.Name}</h4>
                <br />
                <p class="card-text" style={{color: "white", textAlign: "justify", fontFamily: "serif"}}>{si.Des}</p>
            </div>
            <div className="col">
                <br />
                <br />
                <img src={si.Img} class=" img-fluid" alt="..." />
            </div>
            {/* <div className="col-3">
                <div class="card m-2" style={{height : "750px", backgroundColor : "#94b0da"}}>
                    <img src={si.Img} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h4 style={{color: "  #950714", textDecoration: "underline"}}>{si.Name}</h4>
                    <p class="card-text" style={{color: "black", textAlign: "justify"}}>{si.Des}</p>
                    </div>
                </div>
            </div> */}
            </>
        )
    })

    return (
        <>
            <div className="container mt-3 border-top">
                <div className="row m-3 ">
                    {Signs}
                </div>
            </div>
        </>
    )
}