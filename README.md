# White Waters

<p align="center">
  <img alt="White Waters Adventure Tourism" width="100" src="https://cdn-icons-png.flaticon.com/512/3418/3418886.png">
</p>

<h1 align="center">White Waters</h1>

<p align="center">
  Your One Stop Spot For All Your Adventures
</p>

<p align="center">
  Experience the thrill of whitewater rafting, kayaking, trekking, and mountain expeditions in the pristine Himalayas
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#services"><strong>Services</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>

<br/>

## About White Waters

White Waters is a premier adventure tourism platform based in Rishikesh, Uttarakhand, India. We specialize in providing unforgettable outdoor experiences in the Indian Himalayas, offering everything from gentle nature walks to extreme whitewater adventures.

Located on the banks of the sacred Ganges River, our adventure center provides easy access to some of the most exciting rapids and pristine mountain trails in the region. With over 20 years of experience in Himalayan adventures and first descents, we've found the ultimate home for adventure enthusiasts.

## Services

### 🚣 **Kayaking**
Master the art of kayaking in the Indian Himalayas with our expert instructors. Experience the thrill of navigating the Alaknanda River and Ganges catchment with professional guidance and safety equipment.

- **Location**: Alaknanda River Banks, Ganges Catchment
- **Skill Levels**: Beginner to Advanced
- **Duration**: Half-day to multi-day expeditions
- **Features**: Expert local guides, safety-first approach, premium equipment

### 🛟 **Rafting**
Experience the ultimate whitewater rafting adventure through pristine Himalayan rapids. Our experienced guides ensure safe navigation through technical sections while providing an adrenaline-pumping experience.

- **Rivers**: Ganges, Alaknanda, and tributary systems
- **Difficulty**: Various grades available
- **Group Size**: Perfect for teams and families
- **Includes**: Professional guides, safety equipment, riverside camping

### 🥾 **Trekking**
Discover breathtaking trails of the Indian Himalayas with expert guides who know every path, weather pattern, and safe passage through decades of mountain experience.

- **Terrain**: Himalayan peaks and valleys
- **Guides**: Born and raised in the mountains
- **Safety**: Emergency communication, weather monitoring, medical support
- **Approach**: Eco-responsible trekking practices

### 🚶 **Hiking**
Explore scenic trails and nature walks in the beautiful Himalayan foothills. Perfect for all ages (5 to 85), our hiking adventures offer stress relief, mental clarity, and mindful connection with nature.

- **Accessibility**: All fitness levels welcome
- **Benefits**: Proven stress relief, improved mood, enhanced creativity
- **Groups**: Family-friendly adventures
- **Focus**: Digital detox and nature connection

### 🕉️ **Pilgrimage Tours**
Combine spiritual journey with adventure travel through sacred Himalayan routes and ancient pilgrimage paths.

## Features

### 🏔️ **Professional Guides**
- Expert guides with years of whitewater experience
- Born and raised in the Himalayas
- Certified mountain guides with first aid training
- Deep knowledge of local terrain and weather patterns

### 🛡️ **Safety First**
- Top-quality safety equipment and comprehensive briefings
- Emergency communication systems
- Weather monitoring and risk assessment
- Medical support available for all expeditions

### ⚡ **Easy Booking**
- Simple booking process with no account required for one-time adventures
- Flexible participant management
- Guest booking system for quick reservations
- Comprehensive booking management

### 🌱 **Eco-Responsible**
- Environmentally conscious adventure practices
- Leave-no-trace principles
- Support for local communities
- Sustainable tourism approach

## Tech Stack

This platform is built with modern web technologies to provide a seamless booking and information experience:

### **Frontend**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Icon library
- **GSAP** - Advanced animations
- **next-themes** - Theme management

### **Backend**
- **Supabase** - Backend-as-a-Service
  - Authentication and user management
  - PostgreSQL database
  - Real-time subscriptions
  - Row Level Security (RLS)
- **Supabase SSR** - Server-side rendering support

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Node.js** (v18 or higher)
- **npm**, **yarn**, or **pnpm**
- **Supabase account** for database and authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vashishta-Mithra-Reddy/whitewaters.git
   cd whitewaters
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   Get these values from your [Supabase project dashboard](https://supabase.com/dashboard).

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Database Setup

The application requires the following Supabase tables:

- **services** - Adventure service listings
- **bookings** - Customer bookings and reservations
- **participants** - Booking participant details
- **availability** - Service availability calendar

Refer to the `lib/supabase/` directory for type definitions and database schema requirements.

## Project Structure

```
whitewaters/
├── app/                          # Next.js App Router
│   ├── (services)/              # Service-specific pages
│   │   ├── kayaking/
│   │   ├── rafting/
│   │   ├── trekking/
│   │   ├── hiking/
│   │   └── pilgrimage/
│   ├── about/                   # About page
│   ├── auth/                    # Authentication pages
│   ├── contact/                 # Contact information
│   ├── services/                # Services overview
│   ├── the-place/              # Location information
│   └── layout.tsx              # Root layout
├── components/                  # Reusable components
│   ├── shared/                 # Shared components
│   ├── ui/                     # shadcn/ui components
│   └── [feature-components]    # Feature-specific components
├── lib/                        # Utility libraries
│   └── supabase/              # Supabase configuration and helpers
├── public/                     # Static assets
└── [config-files]             # Configuration files
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js application is using Vercel:

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set up Supabase integration**
   - Install the Supabase integration in your Vercel dashboard
   - Environment variables will be automatically configured

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Manual Deployment

For other platforms, ensure you set the following environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run linting and tests**
   ```bash
   npm run lint
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style

- Follow existing code conventions
- Use TypeScript for type safety
- Follow ESLint rules
- Use meaningful component and variable names
- Add comments for complex logic

### Areas for Contribution

- **New adventure services** - Add more outdoor activities
- **UI/UX improvements** - Enhance user experience
- **Performance optimizations** - Improve load times and responsiveness
- **Accessibility** - Make the platform more accessible
- **Documentation** - Improve or translate documentation
- **Bug fixes** - Report and fix issues

## Contact & Support

### White Waters Team
- **Location**: Rishikesh, Uttarakhand, India - 249201
- **Phone**: +91 1234567890 | +91 9876543210
- **Email**: 
  - General inquiries: info@whitewaters.com
  - Bookings: bookings@whitewaters.com
- **Hours**: Monday - Sunday, 8:00 AM - 8:00 PM (Open all year)

### Technical Support
- **Issues**: Open an issue on [GitHub](https://github.com/Vashishta-Mithra-Reddy/whitewaters/issues)
- **Discussions**: Use GitHub Discussions for questions and ideas

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Adventure Awaits in Pristine Waters 🏔️🌊
</p>

<p align="center">
  Made with ❤️ by the White Waters team
</p>
