onmessage = function(e){
    var vector = e.data.split(' ');
    start(vector[0], vector[1], vector[2]);
}

function create_matrix(n, m){
    var a = new Float32Array(n);
    for(var i = 0; i < n; i++){
        a[i] = new Float32Array(m);
        for(var j = 0; j < m; j++)
            a[i][j] = Math.random();
    }
    return a;
}

function m_inmul(n, m, p, a, b, c){
    for(var i = 0; i < n; i++)
        for(var j = 0; j < p; j++){
            c[i][j] = 0;
            for(var k = 0; k < m; k++)
                c[i][j] += a[i][k] * b[k][j];
        }
}

function sterge_martice(a, n){
    for(var i = 0; i < n; i++)
        a[i].length = 0;
        a.length = 0;
}

function start(n, m, p){
    var a = create_matrix(n, m);
    var b = create_matrix(m, p);
    var c = create_matrix(n, p);

    var atunci = new Date().getTime();

    m_inmul(n, m, p, a, b, c)

    var acum = new Date().getTime();
    var timp = acum - atunci;

    sterge_martice(a, n);
    sterge_martice(b, nm);
    sterge_martice(c, n);
    
    postMessage(timp);
}