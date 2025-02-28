<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>About Us</h4>
          <p>We provide high-quality products with a focus on customer satisfaction.</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">

        <p>&copy; 2025 Your Company | All Rights Reserved</p>

        <p>&copy; 2025 | Skillfully Crafted By Keira Kistensamy | All Rights Reserved</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;

    background-color: #b5b9bd;
    color: black;
    padding: 30px 20px;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    max-width: 1200px;
    margin: auto;
  }
  
  .footer-section {
    flex: 1;
    min-width: 250px;
  }
  
  .footer-section h4 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 8px;
  }
  
  .footer-section ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-section ul li a:hover {
    color: #f8b400;
  }
  
  /* Social Media Icons */
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .social-icons a {
    color: white;
    font-size: 20px;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #f8b400;
  }
  
  /* Footer Bottom */
  .footer-bottom {
    margin-top: 20px;
    font-size: 14px;
    opacity: 0.8;
  }
  </style>
  