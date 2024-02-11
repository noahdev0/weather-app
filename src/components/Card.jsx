import React, {useState , useEffect} from 'react'


function Card(
  {name = "Card", 
  temp = "20",
  condition = "Sunny",
  time = "12:00",
  location = "London"}

) {
    const [data, setData] = useState({});
    const apiKey = "";
    
    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .then(console.log(data.location?.name));
    }, [location]);
 
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={data.current?.condition?.icon} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.location?.name}</h2>
        <p>{data.current?.condition?.text}</p>
        <div className="card-actions"></div>
        <h1 className='text-center text-4xl'>  { data.current?.temp_c} °C</h1>
      </div>
    </div>
  );
}

export default Card