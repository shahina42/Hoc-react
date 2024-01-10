import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageHoc from './components/LikeImageHoc';
import LikePostHoc from './components/LikePostHoc';
import LikeImageProps from './components/LikeImageProps';
import LikePostProps from './components/LikePostProps';


function App() {
  return (
   <div className="main">


<div className="box">
<h3>Some Blog</h3>
<div className="buttons">
<LikePost/>
<LikeImage/>
</div>
</div>


<div className="box">
<h3>HOC Blog</h3>
<div className="buttons">
<LikePostHoc/>
<LikeImageHoc/>
</div>
</div>


<div className="box">
<h3>Props Blog</h3>
<div className="buttons">
<LikePostProps/>
<LikeImageProps/>
</div>
</div>


   </div>
  );
}

export default App;
