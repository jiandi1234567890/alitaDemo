


function freeheroitem(data, thisIndex, onItemHover, itemHover ){
  if(!data || !data.ename) return null;
  let imageString = itemHover === thisIndex ? '-freehover.png' : '.jpg';
  return (
       
    <img 
     onMouseEnter = { () => {
         itemHover !== thisIndex && onItemHover(thisIndex);
     }}

     style = {{
        borderRadius: '5px',
        height: '69px',
        margin: '5px 20px 5px 30px',
        width: itemHover === thisIndex ? '224px' : '69px',
     }}

     src={'https://game.gtimg.cn/images/yxzj/img201606/heroimg/' + data.ename + '/' +  data.ename  + imageString} 
     />
  );
}

export default freeheroitem;
