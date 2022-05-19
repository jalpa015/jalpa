import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes'
import Experience from '../components/Experience';

export default function experience() {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {/* <ThemeSwitch />  */}
      <Experience />
      </ThemeProvider>
  );
}
