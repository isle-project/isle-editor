(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{3426:function(i){i.exports=JSON.parse('{"bagging-description":"Agregacja pask\xf3w startowych jest cz\u0119sto stosowana przy u\u017cyciu metod drzewa decyzyjnego. Rysuj\u0105c pr\xf3bki bootstrap\xf3w z oryginalnych danych szkoleniowych szacuj\u0105cych model dla ka\u017cdej wylosowanej pr\xf3bki, przewidywania tych modeli s\u0105 nast\u0119pnie u\u015bredniane, aby uzyska\u0107 przewidywania o mniejszej zmienno\u015bci, a nie tak podatne na przepe\u0142nienie.","boosting-description":"Algorytmy wzmacniaj\u0105ce, takie jak AdaBoost, ucz\u0105 si\u0119 iteracyjnie s\u0142abych klasyfikator\xf3w i dodaj\u0105 je do ko\u0144cowego silnego klasyfikatora poprzez ich wa\u017cenie. W miar\u0119 dodawania klasyfikator\xf3w, \u017ale sklasyfikowane dane wej\u015bciowe zyskuj\u0105 wi\u0119ksz\u0105 wag\u0119, a przyk\u0142ady, kt\xf3re s\u0105 prawid\u0142owo sklasyfikowane, trac\u0105 na wadze. W zwi\u0105zku z tym przyszli s\u0142abi ucz\u0105cy si\u0119 koncentruj\u0105 si\u0119 bardziej na przyk\u0142adach, kt\xf3re poprzednio s\u0142abi ucz\u0105cy si\u0119 b\u0142\u0119dnie sklasyfikowali.","cart-description":"Analiza drzewa klasyfikacji i regresji (CART) buduje drzewo, kt\xf3re przechodzi od cech obserwacji (reprezentowanych w ga\u0142\u0119ziach) do warto\u015bci przewidywanej (reprezentowanej w li\u015bciach).","classification":"Klasyfikacja","clustering":"Tworzenie klastr\xf3w","dimensionality-reduction":"Redukcja wymiarowa","elastic-net-description":"Siatka elastyczna jest metod\u0105 regresji regularnej, \u0142\u0105cz\u0105c\u0105 liniowo kary L1 i L2 metody lasso i kalenicy.","ensemble":"Ensemble","kmeans-description":"Grupowanie obserwacji w sta\u0142\u0105 liczb\u0119 (k) klastr\xf3w w taki spos\xf3b, aby cz\u0142onkowie klastra byli bardziej do siebie podobni ni\u017c do obserwacji w innych klastrach.","knn-description":"U\u017cywany zar\xf3wno do regresji jak i klasyfikacji. Wykorzystuje wi\u0119kszo\u015b\u0107 g\u0142os\xf3w w\u015br\xf3d k-najlepszych punkt\xf3w dla klasyfikacji kNN. W przypadku regresji, wynik jest \u015bredni\u0105 z warto\u015bci k-najbli\u017cszych.","lasso-description":"Metoda regresji regularnej, kt\xf3ra penalizuje wsp\xf3\u0142czynniki regresji przy u\u017cyciu normy L1. Obni\u017ca odchylenie dla odrobiny stronniczo\u015bci. Prowadzi do powstania sk\u0105pego modelu.","linear-regression-description":"Modeluje zale\u017cno\u015b\u0107 mi\u0119dzy skalarn\u0105 odpowiedzi\u0105 a jedn\u0105 lub kilkoma zmiennymi obja\u015bniaj\u0105cymi. Prosta regresja liniowa odnosi si\u0119 do przypadku, w kt\xf3rym wyst\u0119puje jeden predykator, stosuje si\u0119 wielokrotn\u0105 regresj\u0119 liniow\u0105 z wieloma zmiennymi obja\u015bniaj\u0105cymi. Nazywana jest liniow\u0105, poniewa\u017c funkcja estymowana jest liniowa w swoich wsp\xf3\u0142czynnikach.","logistic-regression-description":"Regresja logistyczna jest metod\u0105 klasyfikacji stosowan\u0105 do przypisywania obserwacji do jednej z dw\xf3ch klas. Regresja logistyczna wykorzystuje funkcj\u0119 sigmoid\xf3w logistycznych do zwr\xf3cenia warto\u015bci prawdopodobie\u0144stwa dla ka\u017cdej klasy.","naive-bayes-description":"Metody naiwne Bayes\'a s\u0105 zbiorem algorytm\xf3w klasyfikacyjnych opartych na zastosowaniu twierdzenia Bayes\'a z \\"naiwnym\\" za\u0142o\u017ceniem warunkowej niezale\u017cno\u015bci pomi\u0119dzy ka\u017cd\u0105 par\u0105 cech przy za\u0142o\u017ceniu warto\u015bci zmiennej klasy.","neural-networks-description":"Sztuczne sieci neuronowe s\u0105 wykorzystywane do modelowania z\u0142o\u017conych relacji pomi\u0119dzy wej\u015bciami i wyj\u015bciami poprzez uczenie si\u0119 nieliniowej funkcji bez r\u0119cznej in\u017cynierii funkcji.","random-forest-description":"Lasy losowe konstruuj\u0105 wiele drzew decyzyjnych w czasie treningu i zwracaj\u0105 klas\u0119, kt\xf3ra jest trybem klas (klasyfikacja) lub \u015bredniej prognozy (regresja) poszczeg\xf3lnych drzew.","regression":"Regresja","ridge-description":"Metoda regresji regularnej, kt\xf3ra penalizuje wsp\xf3\u0142czynniki regresji przy u\u017cyciu normy L2. Prowadzi do ni\u017cszej wariancji dla odrobiny stronniczo\u015bci. Nie daje sk\u0105pego modelu, tzn. wsp\xf3\u0142czynniki nie s\u0105 kierowane do zera.","svm-description":"Support Vector Machines s\u0105 dyskryminuj\u0105cymi klasyfikatorami. Bior\u0105c pod uwag\u0119 oznaczone dane szkoleniowe, algorytm znajduje optymaln\u0105 hiperp\u0142aszczyzn\u0119 do kategoryzacji nowych przyk\u0142ad\xf3w. W dw\xf3ch wymiarach ta hiperp\u0142aszczyzna jest lini\u0105 dziel\u0105c\u0105 j\u0105 na dwie cz\u0119\u015bci.","\xfcca-description":"Analiza Sk\u0142adnik\xf3w G\u0142\xf3wnych (PCA) wykorzystuje transformacj\u0119 ortogonaln\u0105 do przekszta\u0142cenia ewentualnie skorelowanych zmiennych w zbi\xf3r warto\u015bci liniowo nieskorelowanych zmiennych zwanych sk\u0142adnikami g\u0142\xf3wnymi."}')}}]);