'use strict';

window.ee = new EventEmitter();

var App = React.createClass({
    render: function () {
        return (
            <div className='app'>This my app</div>
        );
    }
});
/*
ReactDOM.render(
    <App />,
    document.getElementById('root')
);*/@



/*
a = (s * p) / (1 - Math.pow(1 + p, -n))

where:
a - ежемесячный платеж,
s - сумма кредита,
p - процентная ставка в месяц,
n - количество месяцев погашения кредита

 */