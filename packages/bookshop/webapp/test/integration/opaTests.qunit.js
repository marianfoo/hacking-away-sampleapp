sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ui/v4/bookshop/test/integration/FirstJourney',
		'ui/v4/bookshop/test/integration/pages/AuthorsList',
		'ui/v4/bookshop/test/integration/pages/AuthorsObjectPage',
		'ui/v4/bookshop/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ui/v4/bookshop') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);