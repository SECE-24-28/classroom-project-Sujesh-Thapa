import React from 'react'
import './Style.css'

const Header = () => {
    let des = { background: "red", color: "white", padding: "10px" }

    return (
        <>
            <nav className="navbar">
                <div className="nav-links">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Contact</h1>
                </div>
            </nav>
            <div>
            <h1 style={des}>Nepal</h1>
            <p style={{background:"lightblue", color:"black"}}>Nepal is a landlocked country in South Asia, nestled between India to the south and China to the north. Known for its breathtaking natural beauty and extraordinary geographical diversity, Nepal stretches from lowland tropical plains to some of the world’s highest mountains. The country is home to the Himalayan range, including Mount Everest, the tallest peak on Earth. Its landscapes include lush forests, deep valleys, winding rivers, and high-altitude deserts, making Nepal one of the most geographically varied nations in the world.<br></br><br></br>

Culturally, Nepal is rich and vibrant. More than 125 ethnic groups coexist peacefully, each with its own traditions, languages, and customs. While Nepali is the official language, over 120 other languages are spoken across the country. Hinduism and Buddhism are the two major religions, and Nepal is globally recognized as the birthplace of Lord Buddha, born in Lumbini. Festivals such as Dashain, Tihar, Holi, and Buddha Jayanti highlight the deep-rooted spirituality and diverse cultural practices of the Nepalese people.<br></br><br></br>

Economically, Nepal relies heavily on agriculture, tourism, and remittances sent by Nepalese working abroad. Agriculture employs a large portion of the population, with rice, maize, and millet being the primary crops. Tourism is one of the country’s most important sectors, drawing visitors from around the world for trekking, mountaineering, and cultural exploration. Remittances also play a crucial role in Nepal’s economy, providing financial support to many households.<br></br><br></br>

Tourism in Nepal is especially famous for its adventure and cultural experiences. Trekking in regions like Annapurna, Everest, and Langtang offers unparalleled views and challenging routes. Cities such as Kathmandu, Bhaktapur, and Patan are rich in ancient temples, palaces, and UNESCO World Heritage Sites, showcasing unique Newari architecture. Pokhara, with its serene lakes and mountain views, is another major attraction. Together, these natural and cultural treasures make Nepal a captivating destination for travelers.</p>
            </div>
        </>
    )
}
export default Header   