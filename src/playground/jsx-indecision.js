console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'info subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = ' ';
        rendering();
    }
};

const appRoot = document.getElementById('app');

const remove= () => {
    app.options = [];
    rendering();
}; 

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option= app.options[randomNum];
    alert(option);
};

const rendering= () => {
    const template=(
        <div>
            <h1>{app.title} </h1> 
            {app.subtitle && <p> {app.subtitle} </p> }
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'} </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={remove}>Remove All</button>
            <ol>{
            app.options.map((option) => {
                return <li key={option}>{option} </li>
            })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
         </div>
        );

    ReactDOM.render(template, appRoot); 
};

rendering();
