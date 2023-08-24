import  photo   from "../../assets/my-photo.jpg";


function MyPhoto({  }){

    return(
        <>
            <div className="about-me--my-photo">
                <div></div>
                <img src={photo} alt="my-photo" />
            </div>
        </>
    )
};

export { MyPhoto };