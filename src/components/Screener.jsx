import React from 'react';
import $ from 'jquery';



class Screener extends React.Component {
    render() {
        return(
            <div class="tradingview-widget-container">
                <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/screener/" rel="noopener" target="_blank"><span class="blue-text">Stock Screener</span></a> by TradingView</div>
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                    {
                        "width": "100%",
                        "height": "100%",
                        "defaultColumn": "overview",
                        "defaultScreen": "most_capitalized",
                        "market": "america",
                        "showToolbar": true,
                        "locale": "en"
                    }
                </script>
            </div>
        )
    }

}