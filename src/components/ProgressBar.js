const ProgressBar = (props) => {
   const { bgcolor, completed } = props;
 
   const containerStyles = {
     height: '10px',
     width: '100%',
     backgroundColor: "rgba(200,200,200,0.2)",
     borderRadius: 50,
   }
 
   const fillerStyles = {
     height: '100%',
     width: `${completed}%`,
     backgroundColor: bgcolor,
     borderRadius: 'inherit',
     textAlign: 'right'
   }
 
   const labelStyles = {
     padding: 5,
     color: 'white',
     fontWeight: 'bold'
   }
 
   return (
     <div style={containerStyles}>
       <div style={fillerStyles}>
         <span style={labelStyles}></span>
       </div>
     </div>
   );
 };
 
 export default ProgressBar;