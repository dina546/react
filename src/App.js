import logo from './logo.svg';
import './App.css';
import data from './data';
const Background =()=>{
  return (
    <div className="tout">
   <div className="bg">
    <img src={"https://i.pinimg.com/564x/3f/9c/6a/3f9c6aa90d4b24e2525af49c2df85c9b.jpg"}/> </div>
    <div className="data">
    {
    id:1,
    name:'dina chabbouh',
    age:22,
    image:'https://www.forumopera.com/sites/default/files/gens20calexandreweinberger20virginclassics5.jpg'
    
},
{
    id:2,
    name:'salma chabbouh',
    age:45,
    image:'https://www.opera-lille.fr/thumb/?q=75&zc=1&w=496&h=580&src=/home/operalil/www/fichier/o_spectacle/76/spectacle_img_carre_76.r.jpg&f=jpg'
},
{ id:3,
  name:'noussa nasnousa',
  age:33,
  image:'https://cdni.rt.com/french/images/2019.01/article/5c346515488c7b1c438b4567.jpg'}
    </div>
    </div>
  )
}





   

function App() {
  return (
    <div className="App">
     <Background/>
     <data/>
     
  
    </div>
  );
}

export default App;
