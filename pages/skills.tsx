import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes'
import Skills from '../components/Skills';

export default function experience() {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {/* <ThemeSwitch />  */}
      <Skills />
      </ThemeProvider>
  );
}
