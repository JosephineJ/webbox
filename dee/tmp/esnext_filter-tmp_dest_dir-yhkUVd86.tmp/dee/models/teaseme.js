import DS from 'ember-data';

var Genes = DS.Model.extend({
geneName: DS.attr('string'),
nts: DS.attr('string')
});

Genes.reopenClass({
FIXTURES: [
{
id: 1,
geneName: "Monoamine Oxidase A",
nts: "CTGCAGCGAGCGCGGGAAGCGGGACAGGGCCTAGAGTCACTTCTCCCCGCCCCTGACTGGCCCGGGAGCC\
GGGGCTGGTCTCTAAGAGTGGGTACCGTGAACAGCCTGACCGTGGAGAAGGGCTGCGGGAAGCGAAACAC\
CGCCCCCAGCGCCCAGGCTGCTCCAGAAACATGAGCACAAACTGCCTCAGCCTCCTTCCCCGGCGGCACC\
GGCACCGGCACCAGTACCCGCACCAGTACCGGCACCGGCACCAGTACCCGCACCAGTACCGGCACCGGCA\
CCAGTACCCGCACCAGTACCGGCACCGGCACCAGTACCCGCACCAGTACCGGCACCGGCACCGAGCGCAA\
GGGCAGGGCCGCCGAAGCCGGGGCACAACTGCCCAGGTCCCGAACCCGGACTCCAGCTTGGACGACACCT\
CCTACAGCCTGTCCGAATGGAGCGTCCGTTCTGAGTGGCGGTCCGTCTCGGATCCGCTAGCCAGTTCCCA\
GTGGAGCACGTCCTCAACTGCCGAGGCCGCCTCCTGGAGCTCCAGCATACACTCCCCAATCAGCACTACC\
GGTCTTAGCGAGAGTACTGACTCCAGCTGCCAAGAGTGGCCTCCGGGGTTTCAGCGCTTACAACCCGAGC\
AGTCGGATCCCCAAGTCTACCACCAGCTCGAACTCCTCCGATGGGGCCGTCACAGCCTCCAATCAGGACA\
CCGGCATTCCCTGGGTATTAGTAACAGGACCTACCCCGCCCGTAAACTCCCCCGTAGAGTCATTGCAAGG\
GTCTGCCTTCTCCTCAGGGTTCAGCACCCCACGGGGTTTGGTAAAAGGACCGACCCTGCCCCCGGATTCC\
AACCTGACCTCAGTGTCCGACTACACTTGGATATTTGTACGGGGACCTCCTATACCCAATGACCTTTCGC\
AAGTGTCAATACAAGCACCTCCTACACCCAGTAACACCCCGAGTGTAGTACAAGGGTCTGCGCATCCTCA\
GTGTCCAGTTCCCCTGGGGTTTGGTACCAGGACCACCTCTACCCAATAACAGGGCCCCAGTGTCGCCACA\
AGCACCTCCTGCACCCATAACATCCCCCAGTGTCAAGGCAGGGGTCTACCCCCACCTCAGTGCCTGACAC\
TCCGCGGGGTTCAATACAAGAACCTCCTGCACCCAGTAATCCTTTCCAGCTGCCGACACAAGGACATTCT\
AAACCTAATAACTCTCGCCGAGTGTCAGTACAAGGGTCCGCCCCGCTCTCAGTGCCCAGCTCCCCCCGGG\
TATCAGCTGAAACATCAGCTCCGCCCCTGGGCGCTCCCGGAGTATCAGCAAAAGGGTTCGCCCCGCCCAC\
AGTGCCCGGCTCCCCCCGGGTATCAAAAGAAGGATCGGCTCCGCCCCCGGGCTCCCCGGGGGAGTTGATA\
GAAGGGTCCTTCCCACCCTTTGCCGTCCCCACTCCTGTGCCTACGACCCAGGAGCGTGTCAGCCAAAGCA\
TGGAGAATCAAGAGAAGGCGAGTATCGCGGGCCACATGTTCGACGTAGTCGTGATCGGAGGTGGCATTTC\
AG"
}/*,
{
id: 2,
geneName: "Monoamine Oxidase B",
nts: "TTTCTGCAGCGAGCGCGGGAAGCGGGACAGGGCCTAGAGTCACTTCTCCCCGC"
}*/
]
});

export default Genes;
