import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import LatestInvoicesAOR from '../../ui/dashboard/latest-invoices-aor';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} /> 
        {/* <LatestInvoices latestInvoices={latestInvoices} /> 
        This one had mapping issue so I created the static version 2024-03-10 
        I did not use the 'await' keyword */}
      </div>
      <p className="my-2 p-3 bg-ahmedColorScheme01-cambridge-blue 
        text-ahmedColorScheme01-magnolia rounded-xl">
          Latest Invoices length = {`${(await latestInvoices).length} `}</p>
      <h3 className="my-2 p-3 bg-ahmedColorScheme01-jade 
        text-ahmedColorScheme01-magnolia rounded-xl">
          Ahmed is the 9th Raikage! 🐂🐙</h3>
      <LatestInvoicesAOR />
    </main>
  );
}