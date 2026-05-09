import Testimonials from '../home/Testimonials';
import Hero from '../home/Hero';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotificationBell from "../home/notificationBell";
import { useAuth } from "../../hooks/auth/useAuth";

<Link to="/chat">AI Chat</Link>
    const section = document.getElementById("hero");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="logo">
        <li><a onClick={handleScroll4}>Reviews</a></li>
        <li><NotificationBell /></li>
      </div>
    </nav>
  );
}