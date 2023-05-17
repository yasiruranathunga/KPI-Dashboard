import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';


const styles = {
  node: {
    display: 'inline-block',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    height: '50px',
    marginTop:'45px',
    padding: '10px',
    border: '1px solid red',
    borderRadius: '5px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#fff',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
};

 export const ExampleTree = () => (



  <Tree lineWidth={'2px'}
  lineColor={'green'}
  lineBorderRadius={'10px'}label={<div  style={styles.node}>Root</div>}>
    <TreeNode label={<div style={styles.node}>Child 1</div>}>
        
      <TreeNode label={<div style={styles.node} >Grand Child</div>} />
    </TreeNode>
    <TreeNode label={<div style={styles.node}>Child 2</div>}>
          <TreeNode label={<div style={styles.node}>Grand Child</div>} />
    </TreeNode>
    <TreeNode label={<div style={styles.node}>Child 3</div>}>
          <TreeNode label={<div style={styles.node}>Grand Child</div>} />
    </TreeNode>
  
  </Tree>
);
