import React from 'react';
import './footer.css';

const AboutContact = () => {
    return (
        <div className="about-contact">
            <section className="about">
                <h2>About Our Mud Store</h2>
                {/* <p>
                    Welcome to our Mud Store! We are dedicated to providing the finest quality natural mud products, designed for gardening, crafting, and creative exploration.
                </p> */}
                <p>
                    Our mud products cater to a variety of audiences. Whether you’re an artist searching for unique clay for your sculptures, a gardener seeking organic soil amendments for healthy plants, or a DIY enthusiast wanting to create beautiful handcrafted items, we have something for everyone. Our mud products are sourced from local suppliers who practice responsible extraction methods, ensuring minimal environmental impact.
                </p>
                {/* <p>
                    We take immense pride in the quality of our offerings. Every batch of mud is carefully tested for purity and effectiveness, ensuring that you receive only the best. Our range includes:
                </p> */}
                {/* <ul>
                    <li>Natural clay for sculpting and pottery</li>
                    <li>Organic soil amendments that improve plant health</li>
                    <li>Eco-friendly craft kits for hands-on projects</li>
                    <li>Unique decorative mud-based items, perfect for home décor</li>
                    <li>Custom orders tailored to your specific needs</li>
                </ul> */}
                {/* <p>
                    Beyond products, we are committed to sustainability and education. Our store is more than just a shopping destination; it's a community hub. We regularly host workshops and events to educate our customers about the benefits of using natural materials. Whether you're interested in pottery, sustainable gardening practices, or exploring creative uses for mud in crafts, we have classes designed for all skill levels.
                </p> */}
                {/* <p>
                    Our workshops are led by experienced artisans and educators who share their knowledge and passion for eco-friendly practices. Participants have the opportunity to get hands-on experience, learn new skills, and connect with like-minded individuals. We also offer seasonal events, such as community mud days, where families can come together for fun, creativity, and environmental education.
                </p>
                <p>
                    As part of our commitment to the environment, we also engage in various initiatives to reduce waste and promote sustainable practices. For every purchase made, we donate a portion of the proceeds to local environmental organizations. Together, we can make a difference and create a more sustainable future for generations to come.
                </p> */}
                {/* <p>
                    Thank you for supporting our mission! We invite you to explore our wide selection of products and join us in celebrating the beauty of mud. Share your projects with us on social media and become part of a community that values creativity, sustainability, and connection with nature.
                </p> */}
            </section>

            <section className="contact">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <p>+91 86818-57753</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <p>info@mudstore.com</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Tenkasi Main Road - Surandai</p>
                    </div>
                </div>
                <p>If you have any questions, feedback, or need assistance, feel free to reach out to us. Our team is here to help and will respond to your inquiries as promptly as possible.</p>
                {/* <p>Connect with us on social media for the latest updates, promotions, and community projects!</p> */}
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-pinterest"></i>
                    </a>
                </div>
                {/* <p>
                    For more personalized inquiries, you can fill out our contact form on our website. We encourage you to share your experiences, suggestions, and any specific needs you might have. Our dedicated team is always eager to assist and ensure you have the best experience possible.
                </p> */}
                <p>
                    Thank you for visiting our Mud Store. Together, let's embrace creativity, foster sustainability, and make a positive impact on our community and the environment!
                </p>
            </section>
        </div>
    );
};

export default AboutContact;
