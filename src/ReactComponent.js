import React, { useEffect, useState } from 'react';
const ReactComponent = () => {
  const [AngularComponent, setAngularComponent] = useState(null);
  useEffect(() => {
    import('mfeApp/TodoListModule').then((module) => {
      setAngularComponent(module.name);
      console.log(module)
    });
  }, []);
  return (
    <div>
      <p>This is a React component!</p>
      {AngularComponent && <AngularComponent />}
    </div>
  );
};
export default ReactComponent;