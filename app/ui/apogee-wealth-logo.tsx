import { HomeModernIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function ApogeeWealthLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <HomeModernIcon className="h-12 w-12" />
      <p className="text-[44px] mx-3">Apogee Wealth</p>
    </div>
  );
}
