import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
  const [participants, setParticipants] = useState(['Ricardo']);

  function handleParticipantAdd() {
    if (participants.includes('Paulo')) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome.'
      );
    }

    setParticipants((prevState) => [...prevState, 'Loiro']);
  }
  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Deseja realmente remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
    console.log(`Você removeu o participant ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 31 de janeiro de 2023.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleRemoveParticipant(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista.
          </Text>
        )}
      />
    </View>
  );
}
