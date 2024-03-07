import { Carousel } from "react-responsive-carousel";

const Slider = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img alt="" className="w-[1024px] h-[700px]" src="https://images.unsplash.com/photo-1698222476261-c84a34b90ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" className="w-[1024px] h-[700px]" src="https://plus.unsplash.com/premium_photo-1666557388752-87a620a09446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" className="w-[1024px] h-[700px]" src="https://images.unsplash.com/photo-1702893576128-21feb60299d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" className="w-[1024px] h-[700px]" src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img alt="" className="w-[1024px] h-[700px]" src="https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img alt="" className="w-[1024px] h-[700px]" src="https://images.unsplash.com/photo-1701743805506-f615ba6b1edb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    )
}

export default Slider