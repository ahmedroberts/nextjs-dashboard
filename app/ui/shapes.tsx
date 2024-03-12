import zaorShapes from '@/app/ui/home.module.css';

const Shapes = () => {
  return (
    <div>
        {/* CSS Triangle */}
        <div className={zaorShapes.triangle} />
        {/* Tailwind CSS Triangle */}
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent 
        border-r-transparent"/>
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-ahmedColorScheme01-jade border-l-transparent 
        border-r-transparent rotate-12"/>
    </div>
  )
}

export default Shapes