/* This function (Component) displays the appliction name in a header Component */

const PageHeader = ({ title }) => {
  return (
    <div className='page-header'>
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
