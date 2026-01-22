# Component Documentation

## Navigation Component
Located: `src/components/Navigation.tsx`

### Description
A fixed navigation bar with smooth scrolling to page sections.

### Features
- Fixed position at top of page
- Backdrop blur effect
- Responsive (wraps on mobile)
- Smooth scroll to sections
- Hover effects

### Usage
```tsx
import { Navigation } from "../../components/Navigation";

<Navigation />
```

### Customization
Update navigation items in the component:
```typescript
const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  // Add more items...
];
```

---

## Hero Component
Located: `src/components/Hero.tsx`

### Description
Landing section with hero image and headline.

### Features
- Full-width background image
- Gradient overlay
- Centered content
- Responsive text sizing

### Usage
```tsx
import { Hero } from "../../components/Hero";

<Hero />
```

---

## BenefitsSection Component
Located: `src/components/BenefitsSection.tsx`

### Description
Displays the key benefits of choosing 360watts.

### Features
- 4-column grid (responsive)
- Icon + title + description cards
- Transparent card backgrounds

### Data Structure
```typescript
const benefitCards = [
  {
    icon: "/container-5.svg",
    title: "Save on bills",
    description: "Reduce your energy costs significantly",
  },
  // ...
];
```

### Usage
```tsx
import { BenefitsSection } from "../../components/BenefitsSection";

<BenefitsSection />
```

---

## SolutionsSection Component
Located: `src/components/SolutionsSection.tsx`

### Description
Showcases Solar and Smart Home solutions side by side.

### Features
- 2-column grid
- Background images on cards
- Call-to-action button

### Usage
```tsx
import { SolutionsSection } from "../../components/SolutionsSection";

<SolutionsSection />
```

---

## AppFeaturesSection Component
Located: `src/components/AppFeaturesSection.tsx`

### Description
Displays mobile app features with phone mockup.

### Features
- 2-column layout (features + mockup)
- Green gradient background
- Stacked phone screens animation

### Data Structure
```typescript
const appFeatures = [
  {
    icon: "/container-1.svg",
    title: "Real-time solar analytics",
    description: "Monitor your energy production",
  },
  // ...
];
```

### Usage
```tsx
import { AppFeaturesSection } from "../../components/AppFeaturesSection";

<AppFeaturesSection />
```

---

## SolarCalculator Component
Located: `src/components/SolarCalculator.tsx`

### Description
Interactive calculator for estimating solar system requirements.

### Features
- Form-based input
- Real-time calculations
- Results display in cards
- State management with useState
- Auto-calculation from bill amount

### State Interface
```typescript
interface CalculatorData {
  state: string;
  monthlyBill: string;
  estimatedUnits: string;
  availableArea: string;
  roofType: string;
}

interface CalculationResults {
  systemSize: string;
  numPanels: string;
  annualGeneration: string;
  estimatedCost: string;
  savings: string;
  spaceRequired: string;
}
```

### Calculation Logic
Located in `calculateResults` function (lines 60-85):
- System size = Annual units / 1500 (1 kW ≈ 1500 units/year)
- Panels = System size / 0.54 (each panel ≈ 540W)
- Cost = System size × ₹55,000 per kW
- Space = System size × 100 sq ft per kW

### Usage
```tsx
import { SolarCalculator } from "../../components/SolarCalculator";

<SolarCalculator />
```

### Customization
To update calculation logic, modify the `calculateResults` function:
```typescript
const calculateResults = (e: FormEvent) => {
  e.preventDefault();
  // Your custom calculation logic here
  const units = parseInt(formData.estimatedUnits || "0");
  // ...
};
```

---

## ContactForm Component
Located: `src/components/ContactForm.tsx`

### Description
Multi-field contact form with validation and submission handling.

### Features
- Form validation (required fields)
- Email format validation
- Select dropdowns
- Textarea for messages
- Submit button with loading state
- Success alert
- Form reset after submission

### Form Interface
```typescript
interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
  message: string;
}
```

### Usage
```tsx
import { ContactForm } from "../../components/ContactForm";

<ContactForm />
```

### Submission Handler
Located in `handleSubmit` function (lines 34-52):
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // Current: Console log and alert
  console.log("Form submitted:", formData);
  alert(`Thank you ${formData.name}!...`);
  
  // TODO: Add backend API call
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   body: JSON.stringify(formData),
  // });
  
  setFormData({ /* reset */ });
  setIsSubmitting(false);
};
```

### Adding Backend Integration
Replace the alert with an actual API call:
```typescript
try {
  const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    alert('Success!');
  } else {
    alert('Error submitting form');
  }
} catch (error) {
  console.error('Submission error:', error);
  alert('Failed to submit');
}
```

---

## Footer Component
Located: `src/components/Footer.tsx`

### Description
Website footer with contact info and branding.

### Features
- Logo and tagline
- Contact information
- Social media links
- Copyright notice
- Responsive layout

### Usage
```tsx
import { Footer } from "../../components/Footer";

<Footer />
```

### Customization
Update contact information directly in the component:
```typescript
// In Footer.tsx
<a href="mailto:hello@360watts.com">
  hello@360watts.com
</a>
<a href="tel:+919876543210">
  +91-98765-43210
</a>
```

---

## Shared UI Components

### Button
Shadcn UI button component with variants.

```tsx
import { Button } from "./ui/button";

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card
Container component for content sections.

```tsx
import { Card, CardContent } from "./ui/card";

<Card>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

### Input
Form input field component.

```tsx
import { Input } from "./ui/input";

<Input
  type="text"
  placeholder="Enter text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Label
Form label component.

```tsx
import { Label } from "./ui/label";

<Label htmlFor="input-id">
  Label Text
</Label>
```

### Select
Dropdown selection component.

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

---

## Styling Guidelines

### Tailwind Classes
The project uses Tailwind CSS with custom font families:
- **Urbanist**: Headings and bold text
- **Poppins**: Body text and descriptions
- **Figtree**: Footer and small text

### Common Patterns
```tsx
// Responsive padding
className="px-4 md:px-8 lg:px-12"

// Responsive text sizing
className="text-lg md:text-xl lg:text-2xl"

// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Custom font families
className="[font-family:'Urbanist',Helvetica] font-bold"
className="[font-family:'Poppins',Helvetica] font-normal"
```

### Color Palette
- Primary Green: `#00a63e` / `rgba(0,166,62,1)`
- Secondary Green: `#007a55` / `rgba(0,122,85,1)`
- Accent Yellow: `#fdc700` / `rgba(253,199,0,1)`
- Text Dark: `#0a0a0a` / `#495565`
- Background: `#f7fff8`

---

## Testing Checklist

### Functional Testing
- [ ] Navigation links scroll to correct sections
- [ ] Contact form validation works
- [ ] Contact form submits successfully
- [ ] Solar calculator computes correct values
- [ ] All buttons are clickable
- [ ] Forms reset after submission

### Responsive Testing
- [ ] Mobile view (320px - 480px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (1440px+)
- [ ] Navigation menu works on mobile
- [ ] Images scale properly
- [ ] Text remains readable

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari
- [ ] Chrome Android

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG
- [ ] Focus states visible
- [ ] Alt text on all images
- [ ] Semantic HTML used

---

## Deployment

### Build for Production
```bash
npm run build
```

### Output
Built files will be in the `dist/` directory.

### Deploy To
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **AWS S3**: Upload `dist` folder to S3 bucket
- **GitHub Pages**: Push `dist` to gh-pages branch

### Environment Variables
Currently none required. Future additions might include:
- `VITE_API_URL` - Backend API endpoint
- `VITE_ANALYTICS_ID` - Google Analytics ID
- `VITE_CONTACT_EMAIL` - Form submission endpoint

---

## Common Issues & Solutions

### Issue: TypeScript errors in VSCode
**Solution**: Restart TypeScript server (Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server")

### Issue: Images not loading
**Solution**: Ensure images are in `/public` folder and paths start with `/`

### Issue: Form not submitting
**Solution**: Check console for errors. Verify FormEvent handler is correct.

### Issue: Styles not applying
**Solution**: Rebuild Tailwind: `npm run dev` (Vite watches for changes)

### Issue: Calculator gives wrong results
**Solution**: Check calculation logic in `SolarCalculator.tsx` lines 60-85

---

## Support & Contact
For questions about this codebase:
- Email: hello@360watts.com
- Location: Coimbatore, Tamil Nadu
- Phone: +91-98765-43210

---

**Last Updated**: January 9, 2026
**Version**: 2.0.0
**Maintained by**: 360watts Development Team
