const ProjectList = ({ projects }) => {
  
    return projects.map((img, index) => (
      <div key={index} className='img'>
        <img src={ img.img } alt={img.category}/>
      </div>
    ));
  };
  
  export default ProjectList;
  