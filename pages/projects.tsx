import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes'
import Projects from '../components/Projects';

export default function projects() {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {/* <ThemeSwitch />  */}
      <Projects />
      </ThemeProvider>
  );
}
