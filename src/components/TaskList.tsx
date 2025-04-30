import React from 'react';
import { format } from 'date-fns';
import { CheckCircle, Clock, Trash2 } from 'lucide-react';
import type { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  const sortedTasks = [...tasks].sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <div className="space-y-4">
      {sortedTasks.map((task) => (
        <div
          key={task.id}
          className={`bg-white rounded-lg shadow-md p-4 ${
            task.completed ? 'border-l-4 border-green-500' : 'border-l-4 border-blue-500'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </h3>
              <p className="text-gray-600 mt-1">{task.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  {task.startTime} - {task.endTime}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onToggleTask(task.id)}
                className={`p-2 rounded-full ${
                  task.completed
                    ? 'text-green-600 hover:bg-green-100'
                    : 'text-gray-400 hover:bg-gray-100'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="p-2 rounded-full text-red-600 hover:bg-red-100"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}