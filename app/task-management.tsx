import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'In Progress' | 'Completed';
  dueDate: string;
  project: string;
  assignee: string;
  createdAt: string;
}

interface Project {
  id: string;
  name: string;
  color: string;
}

export default function TaskManagementScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design mobile app UI',
      description: 'Create wireframes and mockups for the mobile application',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-01-15',
      project: 'Mobile App',
      assignee: 'John Doe',
      createdAt: '2024-01-01',
    },
    {
      id: '2',
      title: 'Implement user authentication',
      description: 'Set up login and registration functionality',
      priority: 'High',
      status: 'To Do',
      dueDate: '2024-01-20',
      project: 'Mobile App',
      assignee: 'Jane Smith',
      createdAt: '2024-01-02',
    },
    {
      id: '3',
      title: 'Database optimization',
      description: 'Optimize database queries and improve performance',
      priority: 'Medium',
      status: 'Completed',
      dueDate: '2024-01-10',
      project: 'Backend',
      assignee: 'Mike Johnson',
      createdAt: '2024-01-01',
    },
    {
      id: '4',
      title: 'Write API documentation',
      description: 'Create comprehensive API documentation for developers',
      priority: 'Low',
      status: 'To Do',
      dueDate: '2024-01-25',
      project: 'Documentation',
      assignee: 'Sarah Wilson',
      createdAt: '2024-01-03',
    },
    {
      id: '5',
      title: 'Setup CI/CD pipeline',
      description: 'Configure continuous integration and deployment',
      priority: 'Medium',
      status: 'In Progress',
      dueDate: '2024-01-18',
      project: 'DevOps',
      assignee: 'Alex Brown',
      createdAt: '2024-01-02',
    },
  ]);

  const [projects] = useState<Project[]>([
    { id: '1', name: 'Mobile App', color: '#3B82F6' },
    { id: '2', name: 'Backend', color: '#10B981' },
    { id: '3', name: 'Documentation', color: '#F59E0B' },
    { id: '4', name: 'DevOps', color: '#8B5CF6' },
  ]);

  const [selectedFilter, setSelectedFilter] = useState<'All' | 'To Do' | 'In Progress' | 'Completed'>('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'Medium' as 'Low' | 'Medium' | 'High',
    status: 'To Do' as 'To Do' | 'In Progress' | 'Completed',
    dueDate: '',
    project: 'Mobile App',
    assignee: '',
  });

  const filteredTasks = tasks.filter(task => 
    selectedFilter === 'All' || task.status === selectedFilter
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return '#EF4444';
      case 'Medium': return '#F59E0B';
      case 'Low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'To Do': return '#6B7280';
      case 'In Progress': return '#3B82F6';
      case 'Completed': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getProjectColor = (projectName: string) => {
    const project = projects.find(p => p.name === projectName);
    return project?.color || '#6B7280';
  };

  const handleCreateTask = () => {
    if (!newTask.title.trim()) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }

    const task: Task = {
      id: Date.now().toString(),
      ...newTask,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setTasks([task, ...tasks]);
    setNewTask({
      title: '',
      description: '',
      priority: 'Medium',
      status: 'To Do',
      dueDate: '',
      project: 'Mobile App',
      assignee: '',
    });
    setShowCreateModal(false);
    Alert.alert('Success', 'Task created successfully!');
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
      project: task.project,
      assignee: task.assignee,
    });
    setShowCreateModal(true);
  };

  const handleUpdateTask = () => {
    if (!newTask.title.trim()) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }

    setTasks(tasks.map(task => 
      task.id === editingTask?.id 
        ? { ...task, ...newTask }
        : task
    ));
    setEditingTask(null);
    setNewTask({
      title: '',
      description: '',
      priority: 'Medium',
      status: 'To Do',
      dueDate: '',
      project: 'Mobile App',
      assignee: '',
    });
    setShowCreateModal(false);
    Alert.alert('Success', 'Task updated successfully!');
  };

  const handleDeleteTask = (taskId: string) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            setTasks(tasks.filter(task => task.id !== taskId));
            Alert.alert('Success', 'Task deleted successfully!');
          }
        }
      ]
    );
  };

  const handleStatusChange = (taskId: string, newStatus: 'To Do' | 'In Progress' | 'Completed') => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskHeader}>
        <View style={styles.taskTitleRow}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(item.priority) }]}>
            <Text style={styles.priorityText}>{item.priority}</Text>
          </View>
        </View>
        <View style={styles.taskActions}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => handleEditTask(item)}
          >
            <Text style={styles.actionText}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => handleDeleteTask(item.id)}
          >
            <Text style={styles.actionText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.taskDescription}>{item.description}</Text>
      
      <View style={styles.taskDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Project:</Text>
          <View style={[styles.projectBadge, { backgroundColor: getProjectColor(item.project) }]}>
            <Text style={styles.projectText}>{item.project}</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Assignee:</Text>
          <Text style={styles.detailValue}>{item.assignee}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Due Date:</Text>
          <Text style={styles.detailValue}>{item.dueDate}</Text>
        </View>
      </View>

      <View style={styles.statusSection}>
        <Text style={styles.statusLabel}>Status:</Text>
        <View style={styles.statusButtons}>
          {['To Do', 'In Progress', 'Completed'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[
                styles.statusButton,
                item.status === status && styles.activeStatusButton,
                { borderColor: getStatusColor(status) }
              ]}
              onPress={() => handleStatusChange(item.id, status as any)}
            >
              <Text style={[
                styles.statusButtonText,
                item.status === status && { color: getStatusColor(status) }
              ]}>
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Task Management</Text>
            <Text style={styles.headerSubtitle}>{filteredTasks.length} tasks</Text>
          </View>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setShowCreateModal(true)}
          >
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {['All', 'To Do', 'In Progress', 'Completed'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterTab,
              selectedFilter === filter && styles.activeFilterTab
            ]}
            onPress={() => setSelectedFilter(filter as any)}
          >
            <Text style={[
              styles.filterText,
              selectedFilter === filter && styles.activeFilterText
            ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.taskList}
        showsVerticalScrollIndicator={false}
      />

      {/* Create/Edit Modal */}
      <Modal
        visible={showCreateModal}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <KeyboardAvoidingView 
          style={styles.modalContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <View style={styles.modalHeader}>
            <TouchableOpacity 
              onPress={() => {
                setShowCreateModal(false);
                setEditingTask(null);
                setNewTask({
                  title: '',
                  description: '',
                  priority: 'Medium',
                  status: 'To Do',
                  dueDate: '',
                  project: 'Mobile App',
                  assignee: '',
                });
              }}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>
              {editingTask ? 'Edit Task' : 'Create Task'}
            </Text>
            <TouchableOpacity onPress={editingTask ? handleUpdateTask : handleCreateTask}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            style={styles.modalContent}
            contentContainerStyle={styles.modalScrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Task Title *</Text>
                <TextInput
                  style={styles.textInput}
                  value={newTask.title}
                  onChangeText={(text) => setNewTask({...newTask, title: text})}
                  placeholder="Enter task title"
                  returnKeyType="next"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Description</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  value={newTask.description}
                  onChangeText={(text) => setNewTask({...newTask, description: text})}
                  placeholder="Enter task description"
                  multiline
                  numberOfLines={3}
                  returnKeyType="next"
                />
              </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Priority</Text>
              <View style={styles.priorityButtons}>
                {['Low', 'Medium', 'High'].map((priority) => (
                  <TouchableOpacity
                    key={priority}
                    style={[
                      styles.priorityButton,
                      newTask.priority === priority && styles.activePriorityButton,
                      { borderColor: getPriorityColor(priority) }
                    ]}
                    onPress={() => setNewTask({...newTask, priority: priority as any})}
                  >
                    <Text style={[
                      styles.priorityButtonText,
                      newTask.priority === priority && { color: getPriorityColor(priority) }
                    ]}>
                      {priority}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Status</Text>
              <View style={styles.statusButtons}>
                {['To Do', 'In Progress', 'Completed'].map((status) => (
                  <TouchableOpacity
                    key={status}
                    style={[
                      styles.statusButton,
                      newTask.status === status && styles.activeStatusButton,
                      { borderColor: getStatusColor(status) }
                    ]}
                    onPress={() => setNewTask({...newTask, status: status as any})}
                  >
                    <Text style={[
                      styles.statusButtonText,
                      newTask.status === status && { color: getStatusColor(status) }
                    ]}>
                      {status}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Project</Text>
              <View style={styles.projectButtons}>
                {projects.map((project) => (
                  <TouchableOpacity
                    key={project.id}
                    style={[
                      styles.projectButton,
                      newTask.project === project.name && styles.activeProjectButton,
                      { borderColor: project.color }
                    ]}
                    onPress={() => setNewTask({...newTask, project: project.name})}
                  >
                    <Text style={[
                      styles.projectButtonText,
                      newTask.project === project.name && { color: project.color }
                    ]}>
                      {project.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Assignee</Text>
              <TextInput
                style={styles.textInput}
                value={newTask.assignee}
                onChangeText={(text) => setNewTask({...newTask, assignee: text})}
                placeholder="Enter assignee name"
                returnKeyType="next"
              />
            </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Due Date</Text>
                <TextInput
                  style={styles.textInput}
                  value={newTask.dueDate}
                  onChangeText={(text) => setNewTask({...newTask, dueDate: text})}
                  placeholder="YYYY-MM-DD"
                  returnKeyType="done"
                />
              </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#1e3a8a',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#DBEAFE',
    fontSize: 14,
    marginTop: 2,
  },
  addButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  activeFilterTab: {
    backgroundColor: '#3B82F6',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeFilterText: {
    color: 'white',
  },
  taskList: {
    padding: 24,
  },
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  taskTitleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  priorityText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  taskActions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 8,
    marginLeft: 4,
  },
  actionText: {
    fontSize: 16,
  },
  taskDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  taskDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 12,
    color: '#6B7280',
    width: 80,
  },
  detailValue: {
    fontSize: 12,
    color: '#111827',
    fontWeight: '500',
  },
  projectBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  projectText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  statusSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statusLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginRight: 8,
  },
  statusButtons: {
    flexDirection: 'row',
    flex: 1,
  },
  statusButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 8,
    backgroundColor: 'white',
  },
  activeStatusButton: {
    backgroundColor: 'transparent',
  },
  statusButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  cancelText: {
    fontSize: 16,
    color: '#6B7280',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  saveText: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
  },
  modalContent: {
    flex: 1,
  },
  modalScrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  priorityButtons: {
    flexDirection: 'row',
  },
  priorityButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
    backgroundColor: 'white',
  },
  activePriorityButton: {
    backgroundColor: 'transparent',
  },
  priorityButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  projectButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  projectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  activeProjectButton: {
    backgroundColor: 'transparent',
  },
  projectButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
});
