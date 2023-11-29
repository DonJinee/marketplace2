import Image from 'next/image'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Home';

interface Products {
  photoid: number
  url: string;
  name: string;
}

export default async function Home() {  
 
  const res = await fetch ('http://localhost:4000/images',
  {next: {revalidate: 10}})
  const products : Products [] = await res.json();

  return (
    <>
    <Header/>
      <main className="p-4 ">
      <h1 className='pb-4 text-4xl font-mont font-bold'>Best Market Deals Here</h1>
      <div className='grid lg:grid-cols-3 gap-8'>
      {products.map(product => <div className="bg-green-100  card w-96 shadow-xl border-solid border-gray-300 border 2 rounded-lg">
          <img className="w-[100%] rounded-t-lg block my-0 mx-auto"      
          key={product.photoid} 
          width={200}
          height={100}
          src={product.url} 
          alt={product.name}/>
          <div className='card-body'>
            <h2 className='text-center text-2xl font-courgette'>{product.name}</h2>
            <div className="card-actions justify-end font-mont">
              <a className="btn btn-primary m-auto font-bold" href="#">See Deatils Here</a>
            </div>
          </div>
        </div>) }
        </div>
      </main>
    <Footer/>
    </>
  )
}
